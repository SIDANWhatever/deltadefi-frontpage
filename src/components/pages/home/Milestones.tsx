import { PageHeader } from '../../molecules/PageHeader'
import { milestones, SingleEvent } from '@src/assets/StaticContent'
import Image from 'next/image'
import { FlexBox, TitleBox, Card, Text, Container, Page, Label } from '@src/components/atoms'
import { LinkButton } from '@src/components/molecules'

const Milestones = () => {
  return (
    <Page>
      <Container>
        <FlexBox css={{ flexDirection: 'column' }}>
          <PageHeader short="Milestones" long={milestones.title} />
          <FlexBox size="full" css={{ flexDirection: 'column' }}>
            <FlexBox flexResponsive="cr" size="full">
              {milestones.events.map((item) => (
                <FlexBox size="full" key={item.date} css={{ margin: '1rem' }}>
                  <InfoCard
                    picture={item.picture}
                    date={item.date}
                    title={item.title}
                    description={item.description}
                    link={item.link}
                  />
                </FlexBox>
              ))}
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </Container>
    </Page>
  )
}

const InfoCard = (item: SingleEvent) => {
  return (
    <Card flexResponsive="rc">
      {/* DesktopCard */}
      <Card
        only="desktop"
        shadow="none"
        css={{ width: '100%', height: '10rem', borderRadius: '20px 20px 0 0' }}>
        <FlexBox>
          <Image src={item.picture} alt={item.date} />
        </FlexBox>
      </Card>
      <FlexBox only="desktop" css={{ flexDirection: 'column', margin: '1rem 2rem' }}>
        <TitleBox>
          <Text size="m">{item.title}</Text>
        </TitleBox>
        <TitleBox>
          <Text size="s">{item.description}</Text>
        </TitleBox>
        <TitleBox size="full" css={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <LinkButton text="Read More" link={item.link} />
          <Label>{item.date}</Label>
        </TitleBox>
      </FlexBox>

      {/* MobileCard */}
      <Card only="mobile" shadow="none" css={{ height: '100%', width: '10rem', margin: 'auto' }}>
        <FlexBox
          size="full"
          css={{
            backgroundColor: 'black',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <Image src={item.picture} alt={item.date} />
        </FlexBox>
      </Card>
      <FlexBox
        only="mobile"
        css={{ width: '10rem', flexDirection: 'column', margin: '1rem 0.5rem' }}>
        <TitleBox>
          <Text size="m">{item.title}</Text>
        </TitleBox>
        <TitleBox size="full" css={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <LinkButton text="Read More" link={item.link} />
          <Label>{item.date}</Label>
        </TitleBox>
      </FlexBox>
    </Card>
  )
}

export default Milestones
