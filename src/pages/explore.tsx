import { Typography } from '@mui/joy'

import { AppLayout } from '@/layouts/AppLayout'
import { NextPageWithLayout } from '@/types/layout'

const ExplorePage: NextPageWithLayout = () => {
  return <Typography>Explore</Typography>
}

ExplorePage.getLayout = (page) => <AppLayout>{page}</AppLayout>

export default ExplorePage
