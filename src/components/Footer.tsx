import Logo from '@src/assets/Logo.png'
import Image from 'next/image'
import { Page, IconWrapper, FlexBox, Text } from './atoms'

const Footer = () => {
  return (
    <footer className="footer">
      <Page type="footer">
        <IconWrapper>
          <Image src={Logo} alt="Logo" />
        </IconWrapper>
        <FlexBox>
          <Text css={{ color: '$textSecondary' }}>Copyright Reserved By DeltaDeFi</Text>
        </FlexBox>
      </Page>
    </footer>
  )
}

export default Footer
