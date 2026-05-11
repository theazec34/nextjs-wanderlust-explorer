## Next.js Wanderlust Explorer · Wanderlust Labs

Plataforma multi-página construida con **Next.js 15**, **React 19**, **TypeScript** y **Tailwind CSS**.
Incluye 100 experiencias locales, filtros combinables sincronizados con la URL, favoritos con `useState`
compartidos y páginas de detalle dinámicas.

### Scripts

```bash
npm install
npm run dev
npm run lint
npm run build
```

### Rutas incluidas

- `/` — Landing con hero y CTA hacia `/experiences`
- `/experiences` — Grid con barra de búsqueda (regex sensible a mayúsculas) más filtros por categoría y destino enlazados a query params (`search`, `category`, `destination`)
- `/experiences/[id]` — Detalle usando el dataset estático por `id`
- `/favorites` — Lista de favoritos usando estado React de sesión únicamente
- `/profile` — Perfil simulado y contador vivo de favoritos

### Estado y buenas prácticas

- Favoritos: `useState` en `FavoritesProvider` propagado mediante props hasta `ExperienceCard`
- Hooks de consulta (`useSearchParams`, `usePathname`, `router.replace`) dentro de los componentes cliente del explorador
- `useExperienceFilters` agrupa la lógica combinada (`new RegExp(..., 'i')` + filtros opcionales)
- `useEffect` en el explorador ajusta el título del documento cuando cambian los filtros activos

## Design References

1. **[Airbnb Experiences](https://www.airbnb.com/s/experiences)** — Tarjetas con imagen dominante + metadatos para descubrir actividades rápidamente.
2. **[GetYourGuide](https://www.getyourguide.es/)** — Explorador con filtros laterales/supérieurs que combinan categoría y ubicación como referencia UX.
3. **[Kayak Explore](https://www.kayak.com/explore/)** — Narrativa enfocada en viajes espontáneos y llamadas claras tipo “explorar ahora”.

## Entrega para GitHub

```bash
cd nextjs-wanderlust-explorer
git init -b main
git add .
git commit -m "feat: scaffold wanderlust explorer with url-synced filters"
git remote add origin https://github.com/YOUR_USERNAME/nextjs-wanderlust-explorer.git
git push -u origin main
```

Sustituye `YOUR_USERNAME` por tu cuenta antes del `push`.
