'use client';

import Link from 'next/link';
import { useFavoriteControls } from '@/components/FavoritesProvider';

type ExperienceDetailActionsProps = {
  id: number;
};

export default function ExperienceDetailActions({ id }: ExperienceDetailActionsProps) {
  const { isFavorite, toggleFavorite } = useFavoriteControls();
  const favored = isFavorite(id);

  return (
    <div className="flex flex-wrap gap-3">
      <button
        type="button"
        aria-pressed={favored}
        onClick={() => toggleFavorite(id)}
        className={`inline-flex flex-1 min-w-[10rem] items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition sm:flex-none ${
          favored
            ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30'
            : 'border border-rose-200 bg-white text-rose-700 hover:bg-rose-50'
        }`}
      >
        <span aria-hidden>{favored ? '♥' : '♡'}</span>
        {favored ? 'Quitar de favoritos' : 'Guardar favorito'}
      </button>
      <Link
        href="/experiences"
        className="inline-flex flex-1 min-w-[10rem] items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-accent/60 hover:text-accent sm:flex-none"
      >
        Volver al explorador
      </Link>
    </div>
  );
}
