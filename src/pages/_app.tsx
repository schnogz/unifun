import Head from 'next/head'

import { StyleProvider } from '@/providers/StyleProvider'
import { Web3Provider } from '@/providers/Web3Provider'
import { AppPropsWithLayout } from '@/types/layout'

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <>
      <Head>
        <title>UniFun App</title>
      </Head>
      <StyleProvider>
        <Web3Provider>{getLayout(<Component {...pageProps} />)}</Web3Provider>
      </StyleProvider>
    </>
  )
}
