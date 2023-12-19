// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: [ '@nuxtjs/robots',],
  robots: [
    {
        UserAgent: 'Googlebot',
        Disallow: '/user',
    },
    {
        UserAgent: '*',
        Disallow: '/admin',
    },
    // { Sitemap: (req) => `https://${req.headers.host}/sitemap.xml` },  //sites maps need to be added
],
   nitro: {
        minify: true,
        timing: true,
        sourceMap: false,
        compressPublicAssets: {
            gzip: true,
            brotli: true,
        },
        preset: 'vercel',
    },
  postcss: {
      plugins: {
        tailwindcss: {
            content: ['./components/**/*.{js,vue,ts}', './pages/**/*.vue'],
        },
        autoprefixer: {},
      },
  },

  css: ['~/assets/css/main.css'],
  app: {
      head: {
          title: 'Salman Portfolio - Senior UI Developer',
          meta: [{ name: 'description', content: 'Hey, I am Mohammad Salman Professional UI Developer With 5 Years of Experience.' }],
        
        link: [
              {
                  hid: 'icon',
                  rel: 'icon',
                  type: 'image/x-icon',
                  href: '/images/favicon.ico',
              },
              {
                  rel: 'stylesheet',
                  href: 'https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800;900&display=swap',
              },
              {
                  rel: 'stylesheet',
                  href: 'https://kit.fontawesome.com/16d7faf68e.css',
              },
          ],
        script: [{ src: 'https://cdn.tailwindcss.com' }],
      },
  },
})
