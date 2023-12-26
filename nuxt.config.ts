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
                  href: '/images/favicon.png',
              },
              {
                  rel: 'stylesheet',
                  href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap',
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
