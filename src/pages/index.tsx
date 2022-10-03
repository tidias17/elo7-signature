import { useEffect, useState } from 'react';
import type { NextPage } from 'next'
import Layout from 'modules/Layout'
import Detash from 'modules/Detach'
import HowWorks from 'modules/HowWorks'
import Opinion from 'modules/Opinion'
import Plans from 'modules/Plans'

const Home: NextPage = () => {
  const [response, setResponse] = useState({
    testimonial: [],
    plans: [],
  });
  useEffect(() => {
    fetch('/api')
    .then(async (response) => {
      if (response.ok) {
        setResponse(await response.json());
      }
    });
  }, []);

  return (
    <Layout>
      <>
        <Detash />
        <HowWorks />
        <Opinion testimonial={response.testimonial} />
        <Plans plans={response.plans} />
        <section className="container-position">
          <iframe width="1170" height="658" src="https://www.youtube.com/embed/CpFubvWDKPY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
        </section>
      </>
    </Layout>
  )
}

export default Home
