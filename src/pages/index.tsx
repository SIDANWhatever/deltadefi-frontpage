import type { NextPage } from 'next'
import Image from 'next/image'
import Logo from '../assets/Logo.png'
import Navbar from '../components/Navbar'
import LandingPage from '../components/LandingPage'
import BasicIntro from '../components/BasicIntro'
import Head from 'next/head'
import { pageMetadata } from '@src/assets/StaticContent'

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>{pageMetadata.title}</title>
        <meta name="description" content={pageMetadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <Navbar />
        <LandingPage />
        <BasicIntro />
      </main>
      <footer className="footer">
        <a href="https://www.sidan.io" target="_blank" rel="noopener noreferrer">
          Copyright Reserved By{' '}
          <span className="logo">
            <Image src={Logo} alt="Logo" />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
