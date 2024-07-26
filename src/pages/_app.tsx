import CssBaseline from '@mui/joy/CssBaseline'
import { CssVarsProvider, StyledEngineProvider } from '@mui/joy/styles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Head from 'next/head'

import theme from '@/styles/theme'
import { AppPropsWithLayout } from '@/types/layout'

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  const queryClient = new QueryClient()

  return (
    <>
      <Head>
        <title>UniFun</title>
      </Head>
      <StyledEngineProvider injectFirst>
        <CssVarsProvider theme={theme} defaultMode='system'>
          <CssBaseline />
          <QueryClientProvider client={queryClient}>
            {getLayout(<Component {...pageProps} />)}
          </QueryClientProvider>
        </CssVarsProvider>
      </StyledEngineProvider>
    </>
  )
}
