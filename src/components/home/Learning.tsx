import { PageHeader } from '../Items/PageHeader'
import Image from 'next/image'
import { LinkButton } from '../Items/LinkButton'
import { learning } from '@src/assets/StaticContent'

const Learning = () => {
  return (
    <div className="learning">
      <PageHeader short="Learning" long={learning.title} />
      <div className="box">
        <div className="content">
          <Left />
          <Right />
        </div>
      </div>
    </div>
  )
}

const Left = () => {
  return (
    <div className="left">
      <div className="item">
        <div className="smallTitle">
          <span>{learning.smallTitle}</span>
        </div>
        <div className="smallDesc">
          <span>{learning.smallDesc}</span>
        </div>
        <div className="demoPic">
          <div className="imageBox">
            <Image src={learning.leftPic[0]} alt="learning left pic" />
          </div>
          <div className="imageBox">
            <Image src={learning.leftPic[1]} alt="learning left pic" />
          </div>
        </div>
      </div>
      <div className="item">
        <div className="description">
          <span>{learning.description}</span>
        </div>
      </div>
      <div className="item">
        <LinkButton css="button" link={learning.button[0].link} text={learning.button[0].name} />
        <LinkButton css="button" link={learning.button[1].link} text={learning.button[1].name} />
      </div>
    </div>
  )
}
const Right = () => {
  return (
    <div className="right">
      <div className="illustration">
        <Image src={learning.rightPic} alt="learning right pic" />
      </div>
    </div>
  )
}

export default Learning
