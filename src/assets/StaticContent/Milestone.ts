// Basic Intro Session
import { StaticImageData } from 'next/image'
import M1 from '../Milestones/M1.jpeg'
import M2 from '../Milestones/M2.png'
import M3 from '../Milestones/M3.png'
export interface MilestonesInterface {
  title: string
  events: SingleEvent[]
}

export interface SingleEvent {
  title: string
  description: string
  link: string
  date: string
  picture: StaticImageData
}

export const milestones: MilestonesInterface = {
  title: 'The Roadmap to the Future',
  events: [
    {
      title: 'Submit proposal tp Project Catalyst Fund10',
      description:
        'We aim at submitting proposal to challenge(s) available in project catalyst fund 10 to bring ideas to life and help with the future of decentralized platform.',
      link: '/',
      date: 'Q4 2022',
      picture: M1
    },
    {
      title: 'Cooperation from Cardano DEXes',
      description:
        'Exploring cooperation opportunities with other Cardano DEXes so as to provide user more liquidity and better capital efficiency.',
      link: '/',
      date: 'Q1 2023',
      picture: M2
    },
    {
      title: 'Marketing and community participation',
      description:
        'Marketing our platform in different channels e.g. Discord, Twitter, Youtube while letting the community to involve in future features design and refinement.',
      link: '/',
      date: 'Q2 2023',
      picture: M3
    }
  ]
}
