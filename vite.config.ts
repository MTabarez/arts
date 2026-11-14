import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, type Plugin} from 'vite';

function normalizeBase(rawBase?: string): string {
  if (!rawBase) return '/';
  let normalized = rawBase.trim();
  if (!normalized.startsWith('/')) normalized = `/${normalized}`;
  if (!normalized.endsWith('/')) normalized = `${normalized}/`;
  return normalized;
}

function githubPagesSpaPlugin(base: string): Plugin {
  let outDir = 'dist';
  return {
    name: 'github-pages-spa',
    configResolved(config) {
      outDir = config.build.outDir || 'dist';
    },
    closeBundle() {
      const targetDir = path.resolve(__dirname, outDir);
      if (!fs.existsSync(targetDir)) return;

      const pathSegmentsToKeep = base.split('/').filter(Boolean).length;
      const html404 = `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Marianne Tabarez Aristegui</title>
    <script>
      (function () {
        var pathSegmentsToKeep = ${pathSegmentsToKeep};
        var l = window.location;
        l.replace(
          l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
          l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
          l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
          (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
          l.hash
        );
      })();
    </script>
  </head>
  <body></body>
</html>
`;

      fs.writeFileSync(path.join(targetDir, '404.html'), html404, 'utf8');
      fs.writeFileSync(path.join(targetDir, '.nojekyll'), '', 'utf8');
    },
  };
}

export default defineConfig(() => {
  const base = normalizeBase(process.env.VITE_BASE_PATH);

  return {
    base,
    plugins: [react(), tailwindcss(), githubPagesSpaPlugin(base)],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
