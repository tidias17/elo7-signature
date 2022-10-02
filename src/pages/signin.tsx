import { useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router';
import { useAuth } from 'store/context/auth';

const Home: NextPage = () => {
  const router = useRouter();
  const { saveToken, cleanToken } = useAuth();
  const [dataForm, setDataForm] = useState({
    user: '',
    password: '',
  })
  const handleSubmit = async (e:any) => {
		e.preventDefault();
    await fetch('/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type,Authorization,true'
      },
      body: JSON.stringify(dataForm),
    })
    .then(async (response) => {
      if (response.ok) {
        saveToken(await response.json());
        router.push({
          pathname: '/system/dashboard',
        });
      } else {
        cleanToken();
      }
    });
	}

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Esta é a página de login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        header
      </header>

      <main>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="user"
            onChange={(e) => setDataForm({ ...dataForm, user: e.target.value })}
            value={dataForm.user}
          />
          <input
            type="password"
            name="password"
            onChange={(e) => setDataForm({ ...dataForm, password: e.target.value })}
            value={dataForm.password}
          />
          <button type="submit">Buscar</button>
        </form>
      </main>

      <footer>
        footer
      </footer>
    </>
  )
}

export default Home
