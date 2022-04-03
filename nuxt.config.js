export default {
  target: 'static',

  components: true,

  title: 'Freya Laverick',

  head: {
    title: 'home',
    titleTemplate: '%s',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Personal website and portfolio for graphic designer Freya laverick',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Bodoni+Moda&display=swap',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Lato&display=swap',
      },
    ],
  },

  /**
   * Global CSS
   */
  css: ['normalize.css', '~/assets/scss/style.scss'],
};
