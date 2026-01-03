export default {
  base: '/HarshRawal.github.io/', 

  title: 'Harsh Rawal Blog',
  description: 'My personal blog and documentation.',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Configuration', link: '/guide/configuration' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Harsh501/HarshRawal.github.io' }
    ],

    search: {
      provider: 'local'
    }
  }
}
