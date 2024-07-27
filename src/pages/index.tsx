import { ConnectButton } from '@rainbow-me/rainbowkit'

import AppLayout from '@/layouts/AppLayout'
import { NextPageWithLayout } from '@/types/layout'

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <ConnectButton
        label='Connect Wallet'
        accountStatus='address'
        chainStatus='name'
        showBalance
      />
    </>
  )
}

HomePage.getLayout = (page) => <AppLayout>{page}</AppLayout>

export default HomePage
