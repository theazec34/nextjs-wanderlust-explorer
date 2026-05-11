import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg space-y-6 rounded-[2rem] border border-slate-200 bg-white px-10 py-12 text-center shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
        Wanderlust Labs
      </p>
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-ink">Ruta sin mapa</h1>
        <p className="text-slate-600">
          No encontramos esa experiencia. Revisa la URL o vuelve al explorador.
        </p>
      </div>
      <Link
        href="/experiences"
        className="inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white"
      >
        Ir a /experiences
      </Link>
    </div>
  );
}
