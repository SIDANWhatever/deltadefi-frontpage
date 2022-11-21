import { CustomLink, Icon, IconWrapper } from '@src/components/atoms'
import { CSS } from '@stitches/react/types/css-util'
import { StaticImageData } from 'next/image'

interface LinkIconProps {
  image: StaticImageData
  size?: 'default' | 's' | 'l' | 'm'
  alt?: string
  link?: string
  iconWrapperCss?: CSS
}

export const LinkIcon = ({
  image,
  size,
  alt = 'link icon',
  link = '/',
  iconWrapperCss
}: LinkIconProps) => {
  return (
    <IconWrapper css={iconWrapperCss} size={size}>
      <CustomLink href={link}>
        <Icon src={image} alt={alt} />
      </CustomLink>
    </IconWrapper>
  )
}
