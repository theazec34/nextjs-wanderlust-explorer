import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div className="space-y-6">
        <p className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent shadow-sm ring-1 ring-slate-200">
          Wanderlust Labs
        </p>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Descubre tu próxima experiencia inolvidable
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-slate-600">
            Experimenta rutas curadas, filtros por categoría y destino, y favoritos que puedes
            explorar al instante. Los filtros viven en la URL para que compartas exactamente lo que
            estás viendo.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/experiences"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-500/30 transition hover:-translate-y-0.5 hover:bg-teal-700"
          >
            Abrir explorador
          </Link>
          <Link
            href="/profile"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-accent/50 hover:text-accent"
          >
            Ver perfil de demostración
          </Link>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-sand to-teal-50 p-8 shadow-inner">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-coral/20 blur-3xl" />
        <div className="relative space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Experiencias destacadas
          </p>
          <ul className="space-y-3 text-sm text-slate-700">
            <li className="flex items-center justify-between rounded-2xl bg-white/80 px-4 py-3 shadow-sm ring-1 ring-slate-100">
              <span>Aventura & miradores</span>
              <span className="text-xs font-semibold text-accent">Nuevo</span>
            </li>
            <li className="flex items-center justify-between rounded-2xl bg-white/80 px-4 py-3 shadow-sm ring-1 ring-slate-100">
              <span>Rutas gastronómicas locales</span>
              <span className="text-xs font-semibold text-coral">Popular</span>
            </li>
            <li className="flex items-center justify-between rounded-2xl bg-white/80 px-4 py-3 shadow-sm ring-1 ring-slate-100">
              <span>Bienestar junto al mar</span>
              <span className="text-xs font-semibold text-slate-500">Top rating</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
