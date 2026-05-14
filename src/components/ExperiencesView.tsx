'use client';

import { useEffect } from 'react';
import ExperienceCard from '@/components/ExperienceCard';
import FilterBar from '@/components/FilterBar';
import SearchBar from '@/components/SearchBar';
import { useFavoriteControls } from '@/components/FavoritesProvider';
import { experiences, getDestinationOptions } from '@/data/experiences';
import { useExperienceFilters } from '@/hooks/useExperienceFilters';
import { useExplorerQuery } from '@/hooks/useExplorerQuery';
import { normalizeCategoryQueryParam } from '@/constants/categories';

const destinationOptions = getDestinationOptions();

export default function ExperiencesView() {
  const { pathname, searchParams, search, category, destination, replaceQuery } =
    useExplorerQuery();
  const { toggleFavorite, isFavorite } = useFavoriteControls();

  const filtered = useExperienceFilters(experiences, {
    search,
    category,
    destination,
  });

  const visibleRoute = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
  const canonicalCategory = normalizeCategoryQueryParam(category);

  useEffect(() => {
    const raw = category.trim();
    if (!raw) return;
    if (!canonicalCategory) {
      replaceQuery({ category: '' });
      return;
    }
    if (canonicalCategory !== category) {
      replaceQuery({ category: canonicalCategory });
    }
  }, [canonicalCategory, category, replaceQuery]);

  useEffect(() => {
    const pieces: string[] = [];
    if (search) pieces.push(`“${search}”`);
    if (canonicalCategory) pieces.push(canonicalCategory);
    if (destination) pieces.push(destination);
    document.title =
      pieces.length > 0
        ? `Explorador — ${pieces.join(' · ')} | Wanderlust Labs`
        : 'Explorador | Wanderlust Labs';
    return () => {
      document.title = 'Wanderlust Labs';
    };
  }, [search, canonicalCategory, destination]);

  return (
    <div className="space-y-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          Explorador
        </p>
        <h1 className="text-3xl font-semibold text-ink sm:text-4xl">
          100 experiencias para planificar tu viaje
        </h1>
        <p className="max-w-2xl text-slate-600">
          Busca por título con coincidencia flexible, filtra por categoría o destino, y comparte el
          enlace con la misma configuración.
        </p>
        <p className="text-xs text-slate-500">
          Estado en URL:{' '}
          <span className="break-all font-mono text-slate-700">{visibleRoute}</span>
        </p>
      </header>

      <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <SearchBar
          id="explorer-search"
          value={search}
          onChange={(value) => replaceQuery({ search: value })}
        />
        <FilterBar
          category={canonicalCategory}
          destination={destination}
          destinationOptions={destinationOptions}
          onCategoryChange={(value) => replaceQuery({ category: value })}
          onDestinationChange={(value) => replaceQuery({ destination: value })}
        />
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white/70 p-10 text-center text-lg font-medium text-slate-600">
          No se encontraron resultados
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              isFavorite={isFavorite(experience.id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}
