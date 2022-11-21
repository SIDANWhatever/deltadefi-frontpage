import { Media } from './LandingPage'

export interface CommunityInterface {
  socialMedias: Media[]
}

export const community: CommunityInterface = {
  socialMedias: [
    { name: 'twitter', link: 'https://twitter.com/deltadefi' },
    {
      name: 'discord',
      link: 'https://discordapp.com/users/887269496568578058'
    }
  ]
}
