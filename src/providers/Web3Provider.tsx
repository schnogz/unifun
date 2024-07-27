import '@rainbow-me/rainbowkit/styles.css'
import { useColorScheme } from '@mui/joy'
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'
import { WagmiProvider, http } from 'wagmi'
import { sepolia } from 'wagmi/chains'

import { darkRainbowKitTheme, lightRainbowKitTheme } from '@/styles/rainbowKit'

const queryClient = new QueryClient()

// TODO: projectId and private node url should be move to secrets
const chainConfig = getDefaultConfig({
  appName: 'UniFun',
  chains: [sepolia],
  projectId: '148211771de67c5fdb57e38a4d3775dd',
  ssr: true,
  transports: {
    [sepolia.id]: http('https://eth-sepolia.g.alchemy.com/v2/rJNTRaejmgHGpKPcDiRjhY2yWeySBMSl'),
  },
})

export const Web3Provider = ({ children }: PropsWithChildren) => {
  const { mode } = useColorScheme()

  return (
    <WagmiProvider config={chainConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          modalSize='compact'
          theme={mode === 'light' ? lightRainbowKitTheme : darkRainbowKitTheme}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
