import { StaticImageData } from 'next/image'
import { Icon, IconWrapper } from '../atoms'

interface IconBoxProps {
  image: StaticImageData
  size?: 'default' | 's' | 'm' | 'l'
  alt: string
}

export const IconBox = ({ image, size = 'default', alt = 'icon' }: IconBoxProps) => {
  return (
    <IconWrapper size={size}>
      <Icon src={image} alt={alt} />
    </IconWrapper>
  )
}
