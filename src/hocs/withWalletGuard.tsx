'use client'

import { Box, CircularProgress } from '@mui/joy'
import { useRouter } from 'next/router'
import { ComponentType, FC, useEffect } from 'react'
import { useAccount } from 'wagmi'

// this hoc wraps layout files and ensures that users have connected a wallet before they can reach main app
const withWalletGuard = <P extends object>(WrappedComponent: ComponentType<P>): FC<P> => {
  const WithWalletWrapper: FC<P> = (props: P) => {
    const account = useAccount()
    const router = useRouter()

    // must be in useEffect to ensure router is only used in client
    useEffect(() => {
      if (account?.status === 'disconnected') {
        router.push('/connectWallet')
      }
    }, [account, router])

    // if we are connected, return route component
    if (account?.status === 'connected') {
      return <WrappedComponent {...props} />
    }

    // render loading screen until auth state is detected
    return (
      <Box
        sx={(theme) => ({
          alignItems: 'center',
          background: theme.palette.background.body,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center',
          minHeight: '100vh',
          width: '100%',
        })}
      >
        <CircularProgress variant='soft' size='md' />
      </Box>
    )
  }

  return WithWalletWrapper
}

export { withWalletGuard }
