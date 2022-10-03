import type { NextPage } from 'next'
import Layout from 'modules/Layout'
import RegistrationForm from 'modules/RegistrationForm'

const Home: NextPage = () => {

  return (
    <Layout
      footer={false}
      descriptionTitleHeader="Clube de produtos fora de série | Assinar"
    >
      <RegistrationForm />
    </Layout>
  )
}

export default Home
