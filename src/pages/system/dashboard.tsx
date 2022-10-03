import type { NextPage } from 'next'
import Layout from 'modules/Layout'
import Typografy from 'components/Typography'
import { useAuth } from 'store/context/auth';

const Home: NextPage = () => {
  const { contentToken } = useAuth();
  return (
    <Layout
      footer={false}
      descriptionTitleHeader="Clube de produtos fora de série | Dashboard"
    >
      <div className="container-position">
        <Typografy type="normal">Olá {contentToken.name}, que bom ter você por aqui!!</Typografy>
        <Typografy type="normal">O seu atual plano contratado é o {contentToken.plan}.</Typografy>
      </div>
    </Layout>
  )
}

export default Home
