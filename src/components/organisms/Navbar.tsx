import Menu from '@src/assets/Navbar/Menu'
import Cross from '@src/assets/Navbar/Cross'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IconBox, LinkButton } from '../molecules'
import { FlexBox, Label, Nav, IconWrapper } from '../atoms'
import { StaticImageData } from 'next/image'

export interface NavbarInterface {
  projectName: NavItem
  items: NavItem[]
  launch: NavItem
}

export interface NavItem {
  name: string
  link: string
}

export interface NavbarProps {
  logo: StaticImageData
  navInfo: NavbarInterface
  bp?: number
}

export const Navbar = ({ logo, navInfo, bp = 800 }: NavbarProps) => {
  const [button, setButton] = useState(false)
  // const [buttonFocus, setButtonFocus] = useState(false);

  const showButton = () => {
    if (window.innerWidth <= bp) {
      setButton(() => true)
      // setButtonFocus(() => false);
    } else {
      setButton(() => false)
      // setButtonFocus(() => false);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Nav>
      <FlexBox css={{ marginRight: 'auto', paddingLeft: '1.5rem' }}>
        <IconBox image={logo} alt="Icon" />
        <Label position="projectName">
          <span>
            <Link href={navInfo.projectName.link}>{navInfo.projectName.name}</Link>
          </span>
        </Label>
      </FlexBox>
      {button ? <MenuNavbar navInfo={navInfo} /> : <FullNavbar navInfo={navInfo} />}
    </Nav>
  )
}

interface NavInfoProps {
  navInfo: NavbarInterface
}

const FullNavbar = ({ navInfo }: NavInfoProps) => {
  return (
    <FlexBox>
      {navInfo.items.map((item: NavItem) => (
        <FlexBox key={item.name}>
          <LinkButton
            link={item.link}
            text={item.name}
            buttonCss={{
              backgroundColor: 'transparent',
              marginRight: '0.5rem',
              color: '$textPrimary',
              '&:hover': { backgroundColor: '$gray200' }
            }}
          />
        </FlexBox>
      ))}
      <FlexBox css={{ marginRight: '1rem' }}>
        <LinkButton
          link={navInfo.launch.link}
          text={navInfo.launch.name}
          buttonCss={{ color: '$textSecondary' }}
        />
      </FlexBox>
    </FlexBox>
  )
}

const MenuNavbar = ({ navInfo }: NavInfoProps) => {
  const [buttonFocus, setButtonFocus] = useState(false)
  return (
    <FlexBox type="menu" background={buttonFocus ? 'blur' : 'default'} transition="true">
      <FlexBox
        css={{
          marginLeft: 'auto',
          marginRight: '1rem',
          flexDirection: 'column'
        }}>
        <FlexBox
          onClick={() => {
            setButtonFocus(!buttonFocus)
          }}
          css={{
            margin: '1rem',
            padding: '0.25rem',

            '&:hover': {
              cursor: 'pointer'
            }
          }}>
          <IconWrapper size="s">{buttonFocus ? <Cross /> : <Menu />}</IconWrapper>
        </FlexBox>
      </FlexBox>
      {buttonFocus &&
        navInfo.items.map((item: NavItem) => (
          <FlexBox key={item.name}>
            <LinkButton
              link={item.link}
              text={item.name}
              buttonCss={{
                backgroundColor: 'transparent',
                color: '$textPrimary',
                '&:hover': { backgroundColor: '$gray200' }
              }}
            />
          </FlexBox>
        ))}
    </FlexBox>
  )
}
