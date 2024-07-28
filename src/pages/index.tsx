import { Typography, Button } from '@mui/joy'
import { useReward } from 'react-rewards'

import { AppLayout } from '@/layouts/AppLayout'
import { NextPageWithLayout } from '@/types/layout'

const HomePage: NextPageWithLayout = () => {
  const { reward } = useReward('nftMint', 'confetti', {
    elementCount: 500,
    lifetime: 5000,
    spread: 360,
  })

  return (
    <>
      <Typography>Home</Typography>
      <Button onClick={reward}>
        Reward
        <span id='nftMint' />
      </Button>
    </>
  )
}

HomePage.getLayout = (page) => <AppLayout>{page}</AppLayout>

export default HomePage
