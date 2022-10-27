import Logo from '@src/assets/Logo.png'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://www.sidan.io" target="_blank" rel="noopener noreferrer">
        Copyright Reserved By{' '}
        <div className="logo">
          <Image src={Logo} alt="Logo" />
        </div>
      </a>
    </footer>
  )
}

export default Footer
