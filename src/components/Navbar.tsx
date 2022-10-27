import Logo from '../assets/Logo.png'
import Menu from '../assets/Navbar/Menu'
import Cross from '../assets/Navbar/Cross'
import Image from 'next/image'
import Link from 'next/link'
import { navBar } from '../assets/StaticContent'
import { useEffect, useState } from 'react'
import { LinkButton } from './Items/LinkButton'

const Navbar = () => {
  const [button, setButton] = useState(false)
  const [buttonFocus, setButtonFocus] = useState(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(() => true)
      setButtonFocus(() => false)
    } else {
      setButton(() => false)
      setButtonFocus(() => false)
    }
  }

  const setListener = () => {
    for (let i = 0; i < 5; i += 1) {
      if (typeof window === 'undefined') {
        setTimeout(() => {
          console.log('could not find window object, going to retry ...')
        }, 1000)
      } else if (typeof window !== 'undefined') {
        window.addEventListener('resize', showButton)
        console.log('setting completed')
        break
      }
    }
  }

  useEffect(() => {
    showButton()
    setListener()
  }, [])

  return (
    <div className="nav">
      <div className="item">
        <div className="icon">
          <Image src={Logo} alt="logo" />
        </div>
        <span>
          <Link href={navBar.projectName.link}>{navBar.projectName.name}</Link>
        </span>
      </div>
      {!button &&
        navBar.items.map((item) => (
          <div className="item" key={item.name}>
            <Link href={item.link}>{item.name}</Link>
          </div>
        ))}
      {!button && <LinkButton css="item" link={navBar.launch.link} text={navBar.launch.name} />}

      {button && (
        <div
          className="item"
          onClick={() => {
            setButtonFocus(!buttonFocus)
          }}>
          <div className="nav menu-icon">{buttonFocus ? <Cross /> : <Menu />}</div>
        </div>
      )}

      {button && buttonFocus && <div className="menu-cover"></div>}
      {button && buttonFocus && (
        <div className="menu-wrapper">
          {navBar.items.map((item) => (
            <div className="menu-item" key={item.name}>
              <Link href={item.link}>{item.name}</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Navbar
