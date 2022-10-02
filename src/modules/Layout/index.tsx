import Head from 'next/head'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { StyledContainer } from './styled'

type LayoutProps = {
  header?: boolean;
  footer?: boolean;
  children: React.ReactChild;
  descriptionTitleHeader?: string;
};

const Layout = ({
  header = true,
  descriptionTitleHeader = 'Clube de produtos fora de série',
  footer = true,
  children,
}: LayoutProps) => {
  return (
    <StyledContainer>
      <Head>
        <title>Elo7 | Clube de produtos fora de série</title>
      </Head>
      {header && (
        <Header text={descriptionTitleHeader}/>
      )}
      {children}
      {footer && (
        <Footer />
      )}
    </StyledContainer>
  )
}

export default Layout;
