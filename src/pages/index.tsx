import Head from 'next/head'

import Intro from '../components/intro';
import Header from '../components/Header';
import About from '../components/About';
import CronsHub from '../components/CronsHub';
import AboutCronsHub from '../components/AboutCronsHub';
import Lead from '../components/Lead';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cronos - The Internet of Blockchains.</title>
        <meta name="description" content="Cronos is an ever expanding ecosystem of connected apps and services, built for a decentralized future." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Header />
        <Intro />
         <About />
        <CronsHub />
        <AboutCronsHub />
        <Lead />
        <Footer />
      </main>
    </>
  )
}
