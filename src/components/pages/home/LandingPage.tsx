import React from 'react'
import { Media, landingPage, navBar } from '../../../assets/StaticContent'
import { Discord, Twitter, LinkedIn } from '../../../assets/Landing/SocialMedias'
import { LinkButton } from '../../molecules'
import { GradientMesh } from '../../organisms'
import { Card, Container, FlexBox, IconWrapper, Page, Text } from '../../atoms'

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
    <Page css={{ backgroundColor: 'black' }}>
      <GradientMesh meshId="id1" meshColors={['#f8fadb', '#cce8b5', '#ebebeb', '#f8fadb']} />
      <Container>
        <Card type="landing" shadow="none">
          <FlexBox>
            <Text size="xl">{landingPage.largeWord}</Text>
          </FlexBox>
          <FlexBox css={{ flexDirection: 'column', margin: '1rem 0' }}>
            <Text size="sm">{landingPage.smallWord[0]}</Text>
            <Text size="sm">{landingPage.smallWord[1]}</Text>
          </FlexBox>
          <FlexBox css={{ justifyContent: 'left' }}>
            <LinkButton
              buttonCss={{ color: 'white', marginRight: '0.5rem' }}
              link={navBar.items[1].link}
              text={navBar.items[1].name}
            />
            <LinkButton
              buttonCss={{ color: 'white' }}
              link={navBar.launch.link}
              text={navBar.launch.name}
            />
          </FlexBox>
          <FlexBox
            css={{ marginTop: '1rem', height: '2rem', minHeight: '2rem', marginRight: 'auto' }}>
            {landingPage.socialMedias.map((media: Media) => (
              <FlexBox key={media.name} css={{ margin: '0.3rem' }}>
                <IconWrapper size="s">
                  <a href={media.link}>{mediaIcons[media.name]}</a>
                </IconWrapper>
              </FlexBox>
            ))}
          </FlexBox>
        </Card>
      </Container>
    </Page>
  )
}

export default LandingPage
