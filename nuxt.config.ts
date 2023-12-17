// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  postcss: {
      plugins: {
          tailwindcss: {},
          autoprefixer: {},
      },
  },
  css: ['/assets/css/main.css'],
  app: {
      head: {
          title: 'Salman Portfolio - Senior UI Developer',
          meta: [{ name: 'description', content: 'Hey, I am Mohammad Salman Professional UI Developer' }],
          // Font Family
          link: [
              {
                  hid: 'icon',
                  rel: 'icon',
                  type: 'image/x-icon',
                  href: '/images/favicon.ico',
              },
              {
                  rel: 'stylesheet',
                  href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap',
              },
              {
                  rel: 'stylesheet',
                  href: 'https://kit.fontawesome.com/16d7faf68e.css',
              },
          ],
      },
  },
})
