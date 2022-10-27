import { marketFigure } from '@src/assets/StaticContent'
import Image from 'next/image'

const MarketFigure = () => {
  return (
    <div className="marketFigure">
      <div className="box">
        <div className="item">
          <span className="title">{marketFigure.title}</span>
        </div>
        <div className="item">
          <span className="description">{marketFigure.description}</span>
        </div>
        <div className="item">
          {marketFigure.numberBox.map((item) => (
            <div className="card" key={item.title}>
              <div className="icon">
                <Image src={item.icon} alt={item.title} />
              </div>
              <div className="content">
                <span className="number">{item.number}</span>
                <span className="unit">{item.unit}</span>
                <span className="closingDesc">{item.closingDesc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MarketFigure
