import { PageHeader } from '../Items/PageHeader'
import { milestones, SingleEvent } from '@src/assets/StaticContent'
import Image from 'next/image'
import { LinkButton } from '../Items/LinkButton'

const Milestones = () => {
  return (
    <div className="milestones">
      <PageHeader short="Milestones" long={milestones.title} />
      <div className="box">
        <div className="events">
          {milestones.events.map((item) => (
            <div className="singleEvent" key={item.date}>
              <Card
                picture={item.picture}
                date={item.date}
                title={item.title}
                description={item.description}
                link={item.link}
              />
            </div>
          ))}
        </div>
        <div className="timeline">
          {milestones.events.map((item) => (
            <div className="singleTimeline" key={item.date}>
              <div className="timelineContainer">
                <div className="line"></div>
                <div className="circleContainer">
                  <div className="circle"></div>
                </div>
              </div>
              <div className="buttonContainer">
                <LinkButton css="button" link={item.link} text={item.date} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const Card = (item: SingleEvent) => {
  return (
    <div className="card">
      <div className="picture">
        <Image src={item.picture} alt={item.date} />
      </div>
      <div className="content">
        <div className="title">
          <span>{item.title}</span>
        </div>
        <div className="description">
          <span>{item.description}</span>
        </div>
        <div className="readMore">
          <a href={item.link}>Read More</a>
        </div>
      </div>
    </div>
  )
}

export default Milestones
