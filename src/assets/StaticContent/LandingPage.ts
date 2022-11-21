import { MediaIcons } from '../../components/pages/home/LandingPage'

// Landing Page Session

export interface LandingPageInterface {
  largeWord: string
  smallWord: string[]
  socialMedias: Media[]
}

export interface Media {
  name: keyof MediaIcons
  link: string
}

export const landingPage: LandingPageInterface = {
  largeWord: 'Better way to manage your crypto exposure',
  smallWord: ['Decentralized Financial Options Protocol', 'Built on Cardano'],
  socialMedias: [
    { name: 'twitter', link: 'https://twitter.com/deltadefi' },
    {
      name: 'discord',
      link: 'https://discordapp.com/users/887269496568578058'
    },
    { name: 'linkedIn', link: 'https://www.linkedin.com/' }
  ]
}
