## Next.js Wanderlust Explorer · Wanderlust Labs

Plataforma multi-página construida con **Next.js 15**, **React 19**, **TypeScript** y **Tailwind CSS**.
Incluye 100 experiencias locales, filtros combinables sincronizados con la URL, favoritos con `useState`
compartidos y páginas de detalle dinámicas.

### Scripts

Instala siempre las dependencias **antes** de arrancar (el repo incluye `package-lock.json` para instalaciones reproducibles):

```bash
npm ci
# o, si no usas lockfile en local: npm install
npm run dev
npm run lint
npm run build
```

### Si aparece error con `@swc/helpers` (`Cannot find module ... _interop_require_default.cjs`)

Eso suele indicar dependencias incompletas o una carpeta `node_modules` inconsistente.

1. Borra la instalación anterior y vuelve a instalar desde el lock:

   ```bash
   rm -rf node_modules .next
   npm ci
   ```

2. En Windows PowerShell equivalente:

   ```powershell
   Remove-Item -Recurse -Force node_modules, .next -ErrorAction SilentlyContinue
   npm ci
   ```

3. Confirma que existe el archivo tras instalar:

   ```bash
   ls node_modules/@swc/helpers/cjs/_interop_require_default.cjs
   ```

### Rutas incluidas

- `/` — Landing con hero y CTA hacia `/experiences`
- `/experiences` — Grid con barra de búsqueda (regex insensible a mayúsculas con `new RegExp(term, 'i')`) más filtros por categoría y destino enlazados a query params (`search`, `category`, `destination`). Ejemplo compartible: `/experiences?search=vela&category=adventure&destination=Croatia` (la categoría se normaliza a la etiqueta canónica del dataset).
- `/experiences/[id]` — Detalle usando el dataset estático por `id`
- `/favorites` — Lista de favoritos usando estado React de sesión únicamente
- `/profile` — Perfil simulado y contador vivo de favoritos

### Estado y buenas prácticas

- **Favoritos:** `useState` en `FavoritesProvider` (raíz de la app). En el App Router, el estado global entre páginas servidor/cliente se expone con un contexto ligero; `ExperienceCard` y acciones de detalle reciben `isFavorite` y `onToggleFavorite` como **props** (sin Redux ni Zustand).
- **URL del explorador:** `useExplorerQuery` centraliza `useSearchParams`, `usePathname` y `router.replace`; `useExperienceFilters` combina búsqueda y filtros.
- **`useEffect`:** en el explorador se ajusta el título del documento y se normalizan query params de categoría para reflejar los valores del formulario sin bucles.
- **Componentes requeridos:** `Navbar`, `SearchBar`, `FilterBar`, `ExperienceCard` (más vistas de página).

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
