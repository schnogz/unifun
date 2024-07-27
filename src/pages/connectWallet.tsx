import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useAccount } from 'wagmi'

import { NextPageWithLayout } from '@/types/layout'

const ConnectPage: NextPageWithLayout = () => {
  const account = useAccount()
  const router = useRouter()

  useEffect(() => {
    if (account?.isConnected) {
      router.push('/')
    }
  }, [account, router])
  return (
    <ConnectButton label='Connect Wallet' accountStatus='address' chainStatus='name' showBalance />
  )
}

export default ConnectPage
