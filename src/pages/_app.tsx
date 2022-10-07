import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { ThemeProvider } from '@mui/material/styles'
import themeConfig from '@src/libs/themeConfig'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from '@src/store/store'
import { Container } from '@mui/material'
import Head from 'next/head'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={themeConfig}>
            <Container>
              <Component {...pageProps} />
            </Container>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </>
  )
}

export default appWithTranslation(MyApp)