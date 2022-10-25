// MarketFigure Session
export interface MarketFigureInterface {
  title: string;
  description: string;
  numberBox: NumberBox[];
}

export interface NumberBox {
  icon: string;
  number: number;
  unit: string;
  closingDesc: string;
}

export const marketFigure: MarketFigureInterface = {
  title: "Market Figure",
  description: "Description of the market figure",
  numberBox: [
    {
      icon: "https://img.icons8.com/ios/50/000000/ethereum.png",
      number: 100,
      unit: "ETH",
      closingDesc: "Total Value Locked",
    },
    {
      icon: "https://img.icons8.com/ios/50/000000/ethereum.png",
      number: 100,
      unit: "ETH",
      closingDesc: "Total Value Locked",
    },
    {
      icon: "https://img.icons8.com/ios/50/000000/ethereum.png",
      number: 100,
      unit: "ETH",
      closingDesc: "Total Value Locked",
    },
  ],
};