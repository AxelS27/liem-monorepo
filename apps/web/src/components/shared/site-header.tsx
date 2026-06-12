'use client';

import { buttonVariants, cn } from '@repo/ui';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import logo from '@/app/icon.png';
import { LanguageSwitcher, SocialLinks, ThemeSwitcher } from '@/components/shared/header-controls';
import type { Dictionary } from '@/i18n/dictionaries';

/**
 * Public header, two tiers (the foundation default):
 *
 * - UTILITY TIER (slim, top): the universal controls every product keeps - support/help,
 *   language, theme, and the auth entry. Per product, add socials or seller/help links
 *   here, never in the primary nav. This tier exists so variable-width controls (a locale
 *   label like "Bahasa Indonesia" is twice as wide as "English") only reflow this strip;
 *   the primary nav below never shifts when the language or theme changes.
 * - MAIN TIER: brand, primary routes, and the one CTA. Stable widths only.
 *
 * Route-aware: the current page's link gets a visible active treatment and
 * `aria-current="page"`. Only this nav is a client island (it needs `usePathname`), so it
 * cannot load the dictionary itself - the root layout passes the strings as props (ADR-010).
 */
export function SiteHeader({ brand, labels }: { brand: string; labels: Dictionary['nav'] }) {
  const pathname = usePathname();
  const navItems = [
    { label: labels.features, href: '/features' },
    { label: labels.pricing, href: '/pricing' },
  ];
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      {/* Utility tier: universal controls, isolated from the primary nav. */}
      <div className="border-b border-border bg-secondary/30">
        <div className="mx-auto flex h-10 w-full max-w-6xl items-center justify-between px-6 text-xs">
          <nav aria-label="Support navigation" className="flex items-center gap-1">
            <SocialLinks />
            <span aria-hidden="true" className="mx-2 hidden h-4 w-px bg-border sm:block" />
            <a
              href="/contact"
              aria-current={isActive('/contact') ? 'page' : undefined}
              className={cn(
                'rounded-md px-2 py-1.5 transition hover:bg-secondary hover:text-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]',
                isActive('/contact') ? 'font-medium text-foreground' : 'text-muted-foreground',
              )}
            >
              {labels.support}
            </a>
          </nav>
          <div className="flex items-center gap-1">
            <LanguageSwitcher />
            <ThemeSwitcher labels={{ light: labels.themeLight, dark: labels.themeDark }} />
            <span aria-hidden="true" className="mx-2 h-4 w-px bg-border" />
            <a
              href="/signin"
              aria-current={isActive('/signin') ? 'page' : undefined}
              className={cn(
                'rounded-md px-2 py-1.5 transition hover:bg-secondary hover:text-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98]',
                isActive('/signin') ? 'font-medium text-foreground' : 'text-muted-foreground',
              )}
            >
              {labels.signIn}
            </a>
          </div>
        </div>
      </div>

      {/* Main tier: brand, primary routes, one CTA - widths here never depend on locale. */}
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <Image src={logo} alt="" width={32} height={32} priority className="h-8 w-8 rounded-md" />
          <span className="text-base">{brand}</span>
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-6 text-sm md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={cn(
                'transition-colors',
                isActive(item.href)
                  ? 'font-medium text-foreground'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {item.label}
            </a>
          ))}
          <a href="/signup" className={cn(buttonVariants({ size: 'sm' }))}>
            {labels.getStarted}
          </a>
        </nav>

        <details className="group relative md:hidden">
          <summary className="flex h-10 cursor-pointer list-none items-center rounded-md border border-border px-3 text-sm font-medium transition hover:bg-secondary focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-[0.98] marker:hidden [&::-webkit-details-marker]:hidden">
            {labels.menu}
          </summary>
          <nav
            aria-label="Mobile navigation"
            className="absolute right-0 z-10 mt-3 w-52 rounded-md border border-border bg-background p-2 shadow-xs"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={cn(
                  'block rounded-sm px-3 py-2 text-sm transition-colors',
                  isActive(item.href)
                    ? 'bg-secondary font-medium text-foreground'
                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
                )}
              >
                {item.label}
              </a>
            ))}
            <a href="/signup" className={cn(buttonVariants({ size: 'sm' }), 'mt-1 w-full')}>
              {labels.getStarted}
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
