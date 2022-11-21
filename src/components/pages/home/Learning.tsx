import { PageHeader } from '../../molecules/PageHeader'
import Image from 'next/image'
import { learning } from '@src/assets/StaticContent'
import { Card, Container, FlexBox, IconWrapper, Page, Text } from '../../atoms'
import { LinkButton } from '../../molecules'

const Learning = () => {
  return (
    <Page background="secondary">
      <Container>
        <FlexBox css={{ flexDirection: 'column' }}>
          <PageHeader short="Learning" long={learning.title} />
          <FlexBox size="full" css={{ padding: '2rem' }}>
            <Left />
            <Right />
          </FlexBox>
        </FlexBox>
      </Container>
    </Page>
  )
}

const Left = () => {
  return (
    <FlexBox
      size="full"
      css={{
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        marginRight: '3rem'
      }}>
      <FlexBox
        size="full"
        css={{
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-around'
        }}>
        <FlexBox>
          <Text size="ml">{learning.smallTitle}</Text>
        </FlexBox>
        <FlexBox css={{ margin: '1rem 0' }}>
          <Text size="sm">{learning.smallDesc}</Text>
        </FlexBox>
        <FlexBox>
          <IconWrapper size="sm">
            <Image src={learning.leftPic[0]} alt="learning left pic" />
          </IconWrapper>
          <IconWrapper size="l">
            <Image src={learning.leftPic[1]} alt="learning left pic" />
          </IconWrapper>
        </FlexBox>
      </FlexBox>
      <FlexBox>
        <FlexBox css={{ margin: '2rem 0' }}>
          <Text size="sm">{learning.description}</Text>
        </FlexBox>
      </FlexBox>
      <FlexBox size="full" css={{ justifyContent: 'flex-start' }}>
        <LinkButton
          buttonCss={{ marginRight: '1rem' }}
          link={learning.button[0].link}
          text={learning.button[0].name}
        />
        <LinkButton link={learning.button[1].link} text={learning.button[1].name} />
      </FlexBox>
    </FlexBox>
  )
}
const Right = () => {
  return (
    <FlexBox only="desktop" css={{ flex: 2, justifyContent: 'flex-end' }}>
      <FlexBox css={{ width: '40vw', height: '60vh' }}>
        <Card>
          <Image src={learning.rightPic} alt="learning right pic" />
        </Card>
      </FlexBox>
    </FlexBox>
  )
}

export default Learning
