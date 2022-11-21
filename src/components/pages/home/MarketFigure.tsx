import { marketFigure } from '@src/assets/StaticContent'
import Image from 'next/image'
import { Card, Container, FlexBox, IconWrapper, Page, Text } from '../../atoms'

const MarketFigure = () => {
  return (
    <Page>
      <Container css={{ flexDirection: 'column' }}>
        <FlexBox>
          <Text align="center" size="l">
            {marketFigure.title}
          </Text>
        </FlexBox>
        <FlexBox css={{ margin: '1rem 0 2rem 0' }}>
          <Text align="center" size="sm">
            {marketFigure.description}
          </Text>
        </FlexBox>
        <FlexBox flexResponsive="cr">
          {marketFigure.numberBox.map((item) => (
            <Card type="info" flexResponsive="rc" key={item.title} css={{ margin: '2rem' }}>
              <IconWrapper flexResponsive="l">
                <Image src={item.icon} alt={item.title} />
              </IconWrapper>
              <FlexBox css={{ flexDirection: 'column' }}>
                <Text size="m">{item.number}</Text>
                <Text size="sm" color="primaryLight">
                  {item.unit}
                </Text>
                <Text size="s" color="primaryLight">
                  {item.closingDesc}
                </Text>
              </FlexBox>
            </Card>
          ))}
        </FlexBox>
      </Container>
    </Page>
  )
}

export default MarketFigure
