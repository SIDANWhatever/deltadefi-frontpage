import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import LandingPage from '../components/home/LandingPage'
// import BasicIntro from '../components/BasicIntro'
import Head from 'next/head'
import { pageMetadata } from '@src/assets/StaticContent'
import MarketFigure from '@src/components/home/MarketFigure'
import Learning from '@src/components/home/Learning'
import Milestones from '@src/components/home/Milestones'
// import Community from '@src/components/home/Community'
import Footer from '@src/components/Footer'

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
        <MarketFigure />
        <Learning />
        <Milestones />
        {/* <Community /> */}
        {/* <BasicIntro /> */}
      </main>
      <Footer />
    </div>
  )
}

export default Home
