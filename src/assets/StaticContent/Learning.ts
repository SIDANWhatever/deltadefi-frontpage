import { StaticImageData } from 'next/image'
import L1 from '../Learning/L1.png'
import L2 from '../Learning/L2.png'
import R from '../Learning/R.png'

export interface LearningInterface {
  title: string
  smallTitle: string
  smallDesc: string
  leftPic: StaticImageData[]
  description: string
  button: LearningButton[]
  rightPic: StaticImageData
}

export interface LearningButton {
  name: string
  link: string
}

export const learning: LearningInterface = {
  title: 'Enhancing the ecosystem financial literacy as we build',
  smallTitle: 'Why DeltaDeFi?',
  smallDesc: 'Decentralized Crypto Options Trading Platform',
  leftPic: [L1, L2],
  description:
    'Options market is relatively new to Cardano ecosystem. That’s why we made videos to show how users could utilize the platform to trade options. Discussion videos on our platform’s features, team background could also be found in below.',
  button: [
    {
      name: 'Documentation',
      link: '/'
    },
    {
      name: 'Discussion',
      link: '/'
    }
  ],
  rightPic: R
}
