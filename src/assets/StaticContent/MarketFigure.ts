// MarketFigure Session

import { StaticImageData } from 'next/image'
import MF1 from '../MarketFigure/mf1.png'
import MF2 from '../MarketFigure/mf2.png'
import MF3 from '../MarketFigure/mf3.png'
export interface MarketFigureInterface {
  title: string
  description: string
  numberBox: NumberBox[]
}

export interface NumberBox {
  title: string
  icon: StaticImageData
  number: string
  unit: string
  closingDesc: string
}

export const marketFigure: MarketFigureInterface = {
  title: 'Shaping the Crypto Options Industry in Cardano Ecosystem',
  description:
    'Reach your trading goals by taking full advantage of the solid Cardano infrastructure.',
  numberBox: [
    {
      title: 'wallets',
      icon: MF1,
      number: '3.5 million',
      unit: 'Wallets',
      closingDesc: 'As of Aug 2022'
    },
    {
      title: 'market caps',
      icon: MF2,
      number: '14 billion',
      unit: 'Market Cap',
      closingDesc: 'As at 26 Oct 2022'
    },
    {
      title: 'stake',
      icon: MF3,
      number: '70% of ADA',
      unit: 'Staked',
      closingDesc: 'Liquid Staking'
    }
  ]
}
