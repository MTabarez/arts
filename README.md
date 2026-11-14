# Marianne Tabarez Aristegui — Portafolio

Sitio web bilingüe (ES / EN) desarrollado con React, Vite y Tailwind CSS, preparado para publicarse en **GitHub Pages**.

## Publicar en GitHub Pages

1. Sube este repositorio a GitHub (rama `main` o `master`).
2. En GitHub, ve a **Settings → Pages → Build and deployment → Source** y selecciona **GitHub Actions** (no selecciones *Deploy from a branch*, porque el código fuente requiere compilación con Vite).
3. El flujo incluido en `.github/workflows/deploy.yml` detecta automáticamente la ruta base:
   - Si existe `CNAME` en la raíz (o `public/CNAME`) o el repositorio se llama `<usuario>.github.io`, compila con base `/`.
   - Si el repositorio es un proyecto sin dominio propio (por ejemplo `portafolio`), compila automáticamente con base `/portafolio/`.
4. Cada `push` a `main` o `master` reconstruye y despliega el sitio automáticamente.

### Dominio personalizado

El archivo `CNAME` en la raíz del proyecto (por ejemplo `arts.mtabarez.com`) se copia automáticamente a `dist/CNAME` durante el build. Asegúrate de tener los registros DNS apuntando a GitHub Pages y activar **Enforce HTTPS** en **Settings → Pages**.

### Agregar imágenes reales de las obras

1. Coloca las imágenes dentro de `public/works/<slug>/` (por ejemplo `public/works/superficies-tomadas/01.jpg`).
2. En `src/data/projects.ts`, agrega la propiedad `src: '/works/superficies-tomadas/01.jpg'` en `mainImage` o en cada elemento de `gallery`.
3. Las rutas comienzan con `/` y se ajustan automáticamente al `BASE_URL` del despliegue.

## Desarrollo local

```bash
npm install
npm run dev
```

Para probar localmente una compilación con subruta de GitHub Pages:

```bash
VITE_BASE_PATH=/nombre-del-repo/ npm run build
```
