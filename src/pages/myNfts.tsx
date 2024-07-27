import { Typography } from '@mui/joy'

import { AppLayout } from '@/layouts/AppLayout'
import { NextPageWithLayout } from '@/types/layout'

const MyNftsPage: NextPageWithLayout = () => {
  return <Typography>My NFTs</Typography>
}

MyNftsPage.getLayout = (page) => <AppLayout>{page}</AppLayout>

export default MyNftsPage
