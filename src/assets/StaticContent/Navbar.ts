// Nav Bar Session
// import { NavbarInterface } from "../../components/organisms/Navbar"
export interface NavbarInterface {
  projectName: NavItem
  items: NavItem[]
  launch: NavItem
}

export interface NavItem {
  name: string
  link: string
}

export const navBar: NavbarInterface = {
  projectName: { name: 'DeltaDeFi', link: '/' },
  items: [
    {
      name: 'Whitepaper',
      link: '/'
    },
    {
      name: 'Documentation',
      link: 'https://docs.deltadefi.io/'
    }
  ],
  launch: {
    name: 'Launch App',
    link: '/'
  }
}
