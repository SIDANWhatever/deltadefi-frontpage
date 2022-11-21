import type { NextPage } from 'next'
import Logo from '../assets/Logo.png'
import { Navbar } from '../components/organisms/Navbar'
import { navBar, pageMetadata } from '../assets/StaticContent'
import LandingPage from '../components/pages/home/LandingPage'
import Head from 'next/head'
import MarketFigure from '@src/components/pages/home/MarketFigure'
import Learning from '@src/components/pages/home/Learning'
import Milestones from '@src/components/pages/home/Milestones'
import Community from '@src/components/pages/home/Community'
import Footer from '@src/components/Footer'

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>{pageMetadata.title}</title>
        <meta name="description" content={pageMetadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <Navbar logo={Logo} navInfo={navBar} />
        <LandingPage />
        <MarketFigure />
        <Learning />
        <Milestones />
        <Community />
        {/* <BasicIntro /> */}
      </main>
      <Footer />
    </div>
  )
}

export default Home
