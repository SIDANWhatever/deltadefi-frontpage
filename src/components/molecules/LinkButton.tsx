import { CustomLink, Button, Text, IconWrapper, FlexBox } from '@src/components/atoms'
import { CSS } from '@stitches/react/types/css-util'

interface LinkButtonProps {
  link: string
  text: string
  buttonCss?: CSS
}

export const LinkButton = ({ link, text, buttonCss }: LinkButtonProps) => {
  return (
    <Button css={{ color: '$textSecondary', ...buttonCss }}>
      <CustomLink href={link}>{text}</CustomLink>
    </Button>
  )
}

interface IconButtonProps {
  Icon: JSX.Element
  link: string
  text: string
  buttonCss?: CSS
  size?: 'm'
}

export const IconButton = ({ Icon, link, text, buttonCss, size }: IconButtonProps) => {
  return (
    <Button size={size} css={{ color: '$textSecondary', ...buttonCss }}>
      <CustomLink href={link}>
        <FlexBox>
          <IconWrapper size={size} css={{ marginRight: 'auto' }}>
            {Icon}
          </IconWrapper>
          <Text css={{ color: '$textSecondary' }}>{text}</Text>
        </FlexBox>
      </CustomLink>
    </Button>
  )
}
