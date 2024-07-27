import '@rainbow-me/rainbowkit/styles.css'
import CssBaseline from '@mui/joy/CssBaseline'
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles'
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'
import { WagmiProvider } from 'wagmi'
import { sepolia } from 'wagmi/chains'

import theme from '@/styles/theme'

const queryClient = new QueryClient()

const chainConfig = getDefaultConfig({
  appName: 'UniFun',
  chains: [sepolia],
  projectId: '148211771de67c5fdb57e38a4d3775dd',
  ssr: false,
})

export const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <StyledEngineProvider injectFirst>
      <CssVarsProvider theme={theme} defaultMode='system'>
        <CssBaseline />
        <WagmiProvider config={chainConfig}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider>{children}</RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </CssVarsProvider>
    </StyledEngineProvider>
  )
}
