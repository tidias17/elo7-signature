import type { NextPage } from 'next'
import Head from 'next/head'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Detash from 'modules/Detach'
import HowWorks from 'modules/HowWorks'
import Opinion from 'modules/Opinion'
import Plans from 'modules/Plans'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Elo7 | Clube de produtos fora de série</title>
      </Head>

      <Header />
      <Detash />
      <HowWorks />
      <Opinion />
      <Plans />
      <section className="container-position">
        <iframe width="1170" height="658" src="https://www.youtube.com/embed/CpFubvWDKPY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
      </section>
      <Footer />
    </>
  )
}

export default Home
