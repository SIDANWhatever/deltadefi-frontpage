import React from 'react'
import { Media, landingPage, navBar } from '../../assets/StaticContent'
import { Discord, Twitter, LinkedIn } from '../../assets/Landing/SocialMedias'
import { LinkButton } from '../Items/LinkButton'

export interface MediaIcons {
  [key: string]: JSX.Element
}

const LandingPage = () => {
  const mediaIcons: MediaIcons = {
    twitter: <Twitter outerFill="#282c34" />,
    discord: <Discord outerFill="#282c34" />,
    linkedIn: <LinkedIn outerFill="#282c34" />
  }

  return (
    <div className="landing">
      <div className="box">
        <div className="largeWord">
          <span>{landingPage.largeWord}</span>
        </div>
        <div className="smallWord">
          <span>{landingPage.smallWord}</span>
        </div>
        <div className="buttons">
          <LinkButton css="item" link={navBar.launch.link} text={navBar.launch.name} />
          <LinkButton css="item" link={navBar.items[1].link} text={navBar.items[1].name} />
        </div>
        <div className="medias">
          {landingPage.socialMedias.map((media: Media) => (
            <a className="mediaIcon" href={media.link} key={media.name}>
              {mediaIcons[media.name]}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LandingPage
