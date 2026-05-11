'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Experience } from '@/types/experience';

type ExperienceCardProps = {
  experience: Experience;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
};

export default function ExperienceCard({
  experience,
  isFavorite,
  onToggleFavorite,
}: ExperienceCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg">
      <div className="relative overflow-hidden">
        <Link href={`/experiences/${experience.id}`} className="block">
          <div className="relative aspect-[4/3] w-full bg-slate-100">
            <Image
              src={experience.imageUrl}
              alt={experience.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
              priority={experience.id <= 4}
            />
          </div>
        </Link>
        <button
          type="button"
          aria-pressed={isFavorite}
          aria-label={isFavorite ? 'Quitar de favoritos' : 'Guardar en favoritos'}
          onClick={() => onToggleFavorite(experience.id)}
          className={`absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full backdrop-blur transition ${
            isFavorite ? 'bg-rose-500 text-white shadow' : 'bg-white/80 text-rose-600 hover:bg-white'
          }`}
        >
          {isFavorite ? '♥' : '♡'}
        </button>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide text-slate-500">
          <span className="rounded-full bg-accent/10 px-2 py-1 font-semibold text-accent">
            {experience.category}
          </span>
          <span className="truncate font-medium">{experience.destination}</span>
        </div>
        <Link href={`/experiences/${experience.id}`}>
          <h2 className="text-lg font-semibold text-ink underline-offset-4 group-hover:text-accent group-hover:underline">
            {experience.title}
          </h2>
        </Link>
        <p className="line-clamp-2 flex-1 text-sm leading-relaxed text-slate-600">
          {experience.description}
        </p>
        <div className="flex flex-wrap items-end justify-between gap-2 border-t border-slate-100 pt-4 text-sm">
          <div className="text-slate-600">
            <span className="block text-[11px] uppercase tracking-wide">Desde</span>
            <span className="text-lg font-semibold text-ink">${experience.price}</span>
          </div>
          <span className="inline-flex items-center rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
            ★ {experience.rating.toFixed(1)}
          </span>
        </div>
      </div>
    </article>
  );
}
