import type { NextPage } from 'next'
import Layout from 'modules/Layout'
import Detash from 'modules/Detach'
import HowWorks from 'modules/HowWorks'
import Opinion from 'modules/Opinion'
import Plans from 'modules/Plans'

const Home: NextPage = () => {
  return (
    <Layout>
      <>
        <Detash />
        <HowWorks />
        <Opinion />
        <Plans />
        <section className="container-position">
          <iframe width="1170" height="658" src="https://www.youtube.com/embed/CpFubvWDKPY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
        </section>
      </>
    </Layout>
  )
}

export default Home
