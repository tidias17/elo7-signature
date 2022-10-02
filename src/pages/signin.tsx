import type { NextPage } from 'next'
import Layout from 'modules/Layout'
import LoginForm from 'modules/LoginForm'

const Home: NextPage = () => {

  return (
    <Layout
      footer={false}
      descriptionTitleHeader="Clube de produtos fora de série | Login"
    >
      <LoginForm />
    </Layout>
  )
}

export default Home
