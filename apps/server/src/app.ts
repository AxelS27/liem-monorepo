import { healthResponseSchema } from '@repo/types';
import { Hono } from 'hono';

import { notesRoutes } from './features/notes/notes.routes';

// app.ts owns the Hono instance and route registration; features register here.
export const app = new Hono().basePath('/api/v1');

app.get('/health', (c) => c.json(healthResponseSchema.parse({ data: { status: 'ok' } })));

app.route('/notes', notesRoutes);
