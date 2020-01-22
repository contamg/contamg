module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  markdown: {
    lineNumbers: true
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
    logo: '/assets/img/hero.png',
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
