'use client';

import Link from 'next/link';
import ExperienceCard from '@/components/ExperienceCard';
import { useFavoriteControls } from '@/components/FavoritesProvider';
import { experiences } from '@/data/experiences';

export default function FavoritesPage() {
  const { favoriteIds, toggleFavorite, isFavorite } = useFavoriteControls();
  const favoritedExperiences =
    favoriteIds.length > 0
      ? experiences.filter((exp) => favoriteIds.includes(exp.id))
      : [];

  return (
    <section className="space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Favoritos</p>
        <h1 className="text-3xl font-semibold text-ink sm:text-4xl">Tus experiencias guardadas</h1>
        <p className="max-w-2xl text-slate-600">
          Los favoritos viven sólo en el estado React de esta sesión, tal como solicita la
          consigna. Usa los corazones en las tarjetas para añadir o quitar entradas.
        </p>
      </header>
      {favoritedExperiences.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white/70 p-10 text-center text-lg font-medium text-slate-600">
          Todavía no guardaste ninguna experiencia.{' '}
          <Link className="text-accent underline" href="/experiences">
            Explora el directorio completo.
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {favoritedExperiences.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isFavorite={isFavorite(experience.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </section>
  );
}
