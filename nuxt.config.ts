export default defineNuxtConfig({
  compatibilityDate: '2025-05-12',
  app: {
    head: {
      title: 'Nordhealth',
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },
  modules: [
    '@pinia/nuxt',
  ],
  css: [
    '@provetcloud/css'
  ],
  plugins: [
    { src: '~/plugins/provetcloud.client.ts', mode: 'client' }
  ],
  ssr: false,
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('provet-')
    }
  },
  vite: {
    assetsInclude: ['**/*.mp4'],
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('provet-')
        }
      }
    }
  },
  devtools: { enabled: true }
})