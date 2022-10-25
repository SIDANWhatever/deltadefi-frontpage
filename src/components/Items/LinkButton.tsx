import Link from 'next/link'

interface LinkButtonProps {
  css: string
  link: string
  text: string
}

const LinkButton = ({ css, link, text }: LinkButtonProps) => {
  return (
    <div className={css}>
      <Link href={link}>{text}</Link>
    </div>
  )
}

export default LinkButton
