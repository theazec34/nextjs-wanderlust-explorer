'use client';

import type { ExperienceCategory } from '@/types/experience';

const CATEGORY_OPTIONS: { value: '' | ExperienceCategory; label: string }[] = [
  { value: '', label: 'Todas las categorías' },
  { value: 'Adventure', label: 'Adventure' },
  { value: 'Culture', label: 'Culture' },
  { value: 'Food', label: 'Food' },
  { value: 'Wellness', label: 'Wellness' },
  { value: 'Nature', label: 'Nature' },
];

type FilterBarProps = {
  category: string;
  destination: string;
  destinationOptions: string[];
  onCategoryChange: (value: string) => void;
  onDestinationChange: (value: string) => void;
};

export default function FilterBar({
  category,
  destination,
  destinationOptions,
  onCategoryChange,
  onDestinationChange,
}: FilterBarProps) {
  return (
    <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
      <label className="flex flex-1 flex-col gap-1 text-sm font-medium text-slate-700">
        Categoría
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base shadow-sm outline-none ring-accent/30 focus:border-accent focus:ring"
        >
          {CATEGORY_OPTIONS.map((opt) => (
            <option key={opt.label} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </label>
      <label className="flex flex-1 flex-col gap-1 text-sm font-medium text-slate-700">
        Destino (ciudad o país)
        <select
          value={destination}
          onChange={(e) => onDestinationChange(e.target.value)}
          className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base shadow-sm outline-none ring-accent/30 focus:border-accent focus:ring"
        >
          <option value="">Todos los destinos</option>
          {destinationOptions.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
