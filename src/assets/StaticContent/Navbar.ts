// Nav Bar Session

export interface NavBarInterface {
  projectName: NavItem
  items: NavItem[]
  launch: NavItem
}

export interface NavItem {
  name: string
  link: string
}

export const navBar: NavBarInterface = {
  projectName: { name: 'DeltaDeFi', link: '/' },
  items: [
    {
      name: 'Whitepaper',
      link: '/'
    },
    {
      name: 'Documentation',
      link: '/'
    }
  ],
  launch: {
    name: 'Launch App',
    link: '/'
  }
}
