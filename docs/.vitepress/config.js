export default {
  base: '/HarshRawal.github.io/', 

  title: 'Harsh Rawal',
  description: 'My personal blog and documentation.',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' }]
  ],

  themeConfig: {
    outline: [2, 3],
    nav: [
      {
        text: 'Connect',
        items: [
          { text: '<i class="fa-brands fa-github"></i> GitHub', link: 'https://github.com/Harsh501' },
          { text: '<i class="fa-brands fa-linkedin"></i> LinkedIn', link: 'https://www.linkedin.com/in/harsh-rawal-1b9397102' },
          { text: '<i class="fa-solid fa-chess-pawn"></i> Chess.com', link: 'https://www.chess.com/member/hdr501'}
        ]
      }
    ]
  }
}
