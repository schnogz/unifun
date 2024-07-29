import { Box, Button, Stack, Typography } from '@mui/joy'
import { useConnectModal } from '@rainbow-me/rainbowkit'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAccount } from 'wagmi'

import { LandingLayout } from '@/layouts/LandingLayout'
import { NextPageWithLayout } from '@/types/layout'

const ConnectPage: NextPageWithLayout = () => {
  const account = useAccount()
  const router = useRouter()
  const { openConnectModal } = useConnectModal()

  useEffect(() => {
    if (account?.isConnected) {
      router.push('/')
    }
  }, [account, router])
  return (
    <Box>
      <Typography color='primary' level='h1' sx={{ fontSize: '56px' }}>
        🎉 &nbsp;UniFun
      </Typography>
      <Typography level='h2'>Mint the worlds best NFT now</Typography>
      <Stack
        direction='row'
        justifyContent='flex-start'
        alignItems='flex-start'
        spacing={2}
        sx={{ marginTop: 2 }}
      >
        <Button size='lg' color='primary' onClick={openConnectModal} data-testid='connectWalletBtn'>
          Connect Wallet
        </Button>
        <Button
          component='a'
          data-testid='learnMoreBtn'
          href='https://uniswap.org/'
          target='_blank'
          size='lg'
          variant='outlined'
          color='neutral'
        >
          Learn More
        </Button>
      </Stack>
    </Box>
  )
}

ConnectPage.getLayout = (page) => <LandingLayout>{page}</LandingLayout>

export default ConnectPage
