'use client';

import Link from 'next/link';
import { useFavoriteControls } from '@/components/FavoritesProvider';

export default function ProfilePage() {
  const { favoriteIds } = useFavoriteControls();

  return (
    <section className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="flex h-24 w-24 items-center justify-center rounded-[1.75rem] bg-accent/15 text-3xl font-semibold text-accent">
            AL
          </div>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Perfil de demostración</p>
            <h1 className="text-3xl font-semibold text-ink">Alex López</h1>
            <p className="text-sm text-slate-600">Planificador de viajes • Madrid, España</p>
          </div>
        </div>
        <dl className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-100 bg-sand p-4">
            <dt className="text-xs uppercase tracking-[0.2em] text-slate-500">Correo</dt>
            <dd className="text-base font-semibold text-ink">alex.lopez@example.com</dd>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-sand p-4">
            <dt className="text-xs uppercase tracking-[0.2em] text-slate-500">Nivel Wanderlust</dt>
            <dd className="text-base font-semibold text-accent">Trailblazer ✦</dd>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-sand p-4">
            <dt className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Favoritos guardados
            </dt>
            <dd className="text-4xl font-semibold text-ink">{favoriteIds.length}</dd>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-sand p-4">
            <dt className="text-xs uppercase tracking-[0.2em] text-slate-500">Próxima meta</dt>
            <dd className="text-base font-semibold text-slate-800">Documentar rutas gastronómicas</dd>
          </div>
        </dl>
        <Link
          href="/experiences"
          className="inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Explorar experiencias nuevas
        </Link>
      </div>

      <div className="space-y-6 rounded-[2rem] border border-dashed border-slate-300 bg-white/80 p-8">
        <h2 className="text-xl font-semibold text-ink">Preferencias rápidas</h2>
        <ul className="space-y-3 text-base text-slate-700">
          <li>Filtros compartibles en la URL con `search`, `category` y `destination`.</li>
          <li>Listas enriquecidas con calificaciones ficticias sólo orientativas.</li>
          <li>Sin Redux: React `useState` compartido y props en los componentes de tarjetas.</li>
        </ul>
        <p className="text-sm text-slate-500">
          Este bloque existe para simular contenido típico de perfil sin persistir ningún campo en
          almacenamiento local.
        </p>
      </div>
    </section>
  );
}
