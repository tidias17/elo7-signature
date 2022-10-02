import { StyledGlobal } from 'theme/styledGlobal'
import AppProviders from 'store/providers'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <StyledGlobal />
      <AppProviders>
        <Component {...pageProps} />
      </AppProviders>
    </>
  )
}

export default MyApp
