// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  redirects: {
    // Строковый формат (статус-код по умолчанию)
    '/old-page': '/new-page',
    // Объектный формат, 301 постоянный редирект
    '/legacy': {
      destination: '/new-page',
      status: 301
    },
    // Объектный формат, 302 временный редирект
    '/temp': {
      destination: '/index',
      status: 302
    }
  }
});
