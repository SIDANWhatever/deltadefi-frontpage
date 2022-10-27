import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from '@src/store/store'
import '@src/styles/main.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  )
}

export default appWithTranslation(MyApp)
