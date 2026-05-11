import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ExperienceDetailActions from '@/components/ExperienceDetailActions';
import { getExperienceById } from '@/data/experiences';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ExperienceDetailPage({ params }: Props) {
  const { id: rawId } = await params;
  const id = Number.parseInt(rawId, 10);
  if (!Number.isFinite(id)) {
    notFound();
  }

  const experience = getExperienceById(id);
  if (!experience) {
    notFound();
  }

  return (
    <article className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="relative">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-lg">
          <div className="relative aspect-square w-full bg-slate-100 sm:aspect-[4/5] lg:aspect-auto lg:h-[560px]">
            <Image
              src={experience.imageUrl}
              alt={experience.title}
              fill
              priority
              sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
        <p className="mt-4 text-xs uppercase tracking-[0.3em] text-slate-500">
          Detalle #{experience.id}
        </p>
      </div>
      <div className="flex flex-col gap-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-wide text-slate-600">
          <span className="rounded-full bg-accent/10 px-3 py-1 font-semibold text-accent">
            {experience.category}
          </span>
          <span>{experience.destination}</span>
        </div>
        <header className="space-y-2">
          <h1 className="text-3xl font-semibold text-ink sm:text-4xl">{experience.title}</h1>
          <p className="text-lg text-slate-600">{experience.destination}</p>
        </header>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-700">
          <span className="inline-flex rounded-full bg-amber-50 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-amber-800">
            ★ Rating {experience.rating.toFixed(1)}
          </span>
          <span className="inline-flex rounded-full bg-slate-100 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-800">
            Desde ${experience.price}
          </span>
        </div>
        <p className="text-base leading-relaxed text-slate-700">{experience.description}</p>
        <ExperienceDetailActions id={experience.id} />
        <div className="border-t border-slate-100 pt-6 text-sm text-slate-500">
          ¿Necesitas volver rápido?{' '}
          <Link href="/experiences" className="font-semibold text-accent">
            Lista completa de experiencias
          </Link>
        </div>
      </div>
    </article>
  );
}
