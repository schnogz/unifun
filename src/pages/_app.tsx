import Head from 'next/head'

import { AppProvider } from '@/providers/app'
import { AppPropsWithLayout } from '@/types/layout'

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <>
      <Head>
        <title>UniFun</title>
      </Head>
      <AppProvider>{getLayout(<Component {...pageProps} />)}</AppProvider>
    </>
  )
}
