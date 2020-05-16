module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  head: [
    ['link', {rel:"apple-touch-icon", sizes:"57x57", href:"/assets/favicon/apple-icon-57x57.png"}],
    ['link', {rel:"apple-touch-icon", sizes:"60x60", href:"/assets/favicon/apple-icon-60x60.png"}],
    ['link', {rel:"apple-touch-icon", sizes:"72x72", href:"/assets/favicon/apple-icon-72x72.png"}],
    ['link', {rel:"apple-touch-icon", sizes:"76x76", href:"/assets/favicon/apple-icon-76x76.png"}],
    ['link', {rel:"apple-touch-icon", sizes:"114x114", href:"/assets/favicon/apple-icon-114x114.png"}],
    ['link', {rel:"apple-touch-icon", sizes:"120x120", href:"/assets/favicon/apple-icon-120x120.png"}],
    ['link', {rel:"apple-touch-icon", sizes:"144x144", href:"/assets/favicon/apple-icon-144x144.png"}],
    ['link', {rel:"apple-touch-icon", sizes:"152x152", href:"/assets/favicon/apple-icon-152x152.png"}],
    ['link', {rel:"apple-touch-icon", sizes:"180x180", href:"/assets/favicon/apple-icon-180x180.png"}],
    ['link', {rel:"icon", type:"image/png", sizes:"192x192", href:"/assets/favicon/android-icon-192x192.png"}],
    ['link', {rel:"icon", type:"image/png", sizes:"32x32", href:"/assets/favicon/favicon-32x32.png"}],
    ['link', {rel:"icon", type:"image/png", sizes:"96x96", href:"/assets/favicon/favicon-96x96.png"}],
    ['link', {rel:"icon", type:"image/png", sizes:"16x16", href:"/assets/favicon/favicon-16x16.png"}],
    ['link', {rel:"manifest", href:"/manifest.json"}],
    ['meta', {name:"msapplication-TileColor", content:"#ffffff"}],
    ['meta', {name:"msapplication-TileImage", content:"/assets/favicon/ms-icon-144x144.png"}],
    ['meta', {name:"theme-color", content:"#ffffff"}],
  ],
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      md.use(require('@quartzy/markdown-it-mentions')) 
    },
  },
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/search',
    '@vuepress/last-updated',
    '@vuepress/nprogress',
    'vuepress-plugin-smooth-scroll',
    ['@vuepress/register-components', {
      componentsDir: '.vuepress/components',
    }],
    '@vuepress/nprogress',
  ],
  themeConfig: {
    logo: '/assets/img/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'About', link: '/about' },
      { text: 'Demo', link: 'https://google.com' }
    ],
    sidebar: 'auto'
  },
  theme: '@vuepress/theme-default',
};
