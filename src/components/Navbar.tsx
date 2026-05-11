'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useFavoriteControls } from '@/components/FavoritesProvider';

type NavLink = {
  href: string;
  label: string;
};

const LINKS: NavLink[] = [
  { href: '/', label: 'Inicio' },
  { href: '/experiences', label: 'Experiencias' },
  { href: '/favorites', label: 'Favoritos' },
  { href: '/profile', label: 'Perfil' },
];

export default function Navbar() {
  const pathname = usePathname();
  const { favoriteIds } = useFavoriteControls();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold text-ink">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent/10 text-lg text-accent">
            ✈
          </span>
          <span className="hidden sm:inline">Wanderlust Labs</span>
        </Link>
        <nav className="ml-auto flex flex-wrap items-center gap-1 text-sm font-medium">
          {LINKS.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-2 transition ${
                  active
                    ? 'bg-ink text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {link.label}
                {link.href === '/favorites' && favoriteIds.length > 0 ? (
                  <span className="ml-2 inline-flex min-w-[1.5rem] justify-center rounded-full bg-white px-2 text-[11px] font-bold text-accent">
                    {favoriteIds.length}
                  </span>
                ) : null}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
