module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Elixir Buildpack',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Deploy Elixir using buildpacks',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#8475B1' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: '/assets/img/elixir-icon.png',
    docsRepo: 'elixir-buildpack/website',
    editLinks: true,
    docsDir: '',
    editLinkText: 'Edit Page',
    lastUpdated: true,
    nav: [
      { text: 'Heroku Buildpack', link: '/heroku-buildpack/' },
      { text: 'Heroku OTP Builds', link: '/heroku-otp/' },
      { text: 'Cloud Native Buildpack', link: '/cloud-native-buildpack/' },
      { text: 'GitHub', link: 'https://github.com/elixir-buildpack' }
    ],
    sidebar: {
      '/heroku-buildpack/': [
        {
          title: 'Heroku Buildpack',
          collapsable: false,
          children: [
            'quick-start'
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
