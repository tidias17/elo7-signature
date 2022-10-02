import { useEffect } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router';
import { useAuth } from 'store/context/auth';

const Home: NextPage = () => {
  const { contentToken } = useAuth();
  const router = useRouter();
  useEffect(() => {
    
  }, []);
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Esta é a página inicial" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        header
      </header>

      <main>
        Dashboard
      </main>

      <footer>
        footer
      </footer>
    </>
  )
}

export default Home
