import Link from 'next/link'
// import Image, { StaticImageData } from 'next/image'

interface LinkButtonProps {
  css: string
  link: string
  text: string
}
// interface IconButtonProps {
//   Icon: JSX.Element
//   css: string
//   link: string
//   text: string
// }

const LinkButton = ({ css, link, text }: LinkButtonProps) => {
  return (
    <div className={css}>
      <Link href={link}>{text}</Link>
    </div>
  )
}

// const IconButton = ({ Icon, css, link, text }: IconButtonProps) => {
//   return (
//     <div className={css}>
//       {/* <Icon /> */}
//       <Link href={link}>{text}</Link>
//     </div>
//   )
// }

export { LinkButton }
