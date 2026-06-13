import type { MiddlewareHandler } from 'hono';
import { errorBody } from '../lib/errors';

interface ClientRequestRecord {
  timestamps: number[];
}

const clientRequestStore = new Map<string, ClientRequestRecord>();

/**
 * Simple in-memory sliding-window rate limiter middleware.
 * Prevents basic DDoS and brute force attacks on endpoints.
 */
export const rateLimiter = (
  options: { limit: number; windowMs: number } = { limit: 100, windowMs: 60 * 1000 },
): MiddlewareHandler => {
  return async (c, next) => {
    const ip = c.req.header('x-forwarded-for') || c.req.header('x-real-ip') || 'unknown-ip';
    const now = Date.now();

    let record = clientRequestStore.get(ip);
    if (!record) {
      record = { timestamps: [] };
      clientRequestStore.set(ip, record);
    }

    // Filter timestamps outside of the sliding window
    record.timestamps = record.timestamps.filter((t) => now - t < options.windowMs);

    if (record.timestamps.length >= options.limit) {
      c.header('Retry-After', String(Math.ceil(options.windowMs / 1000)));
      return c.json(
        errorBody('TOO_MANY_REQUESTS', 'Rate limit exceeded. Please try again later.'),
        429,
      );
    }

    record.timestamps.push(now);
    await next();
  };
};
