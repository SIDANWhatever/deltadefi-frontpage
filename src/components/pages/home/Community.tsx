import { Container, FlexBox, Page } from '@src/components/atoms'
import { IconButton } from '@src/components/molecules'
import { CenterHeader } from '../../molecules/PageHeader'
import { Discord, Twitter } from '@src/assets/Landing/SocialMedias'
import { community } from '@src/assets/StaticContent/Community'

const Community = () => {
  return (
    <Page background="secondary" css={{ height: '60vh' }}>
      <Container>
        <FlexBox css={{ flexDirection: 'column' }}>
          <CenterHeader short="Community" long="Join our community" />
          <FlexBox css={{ flexDirection: 'column' }}>
            <IconButton
              Icon={<Discord outerFill="none" />}
              link={community.socialMedias[1].link}
              text="Discord"
              buttonCss={{ margin: '1rem' }}
              size="m"
            />
            <IconButton
              Icon={<Twitter outerFill="none" />}
              link={community.socialMedias[0].link}
              text="Twitter"
              buttonCss={{ margin: '1rem' }}
              size="m"
            />
          </FlexBox>
        </FlexBox>
      </Container>
    </Page>
  )
}

export default Community
