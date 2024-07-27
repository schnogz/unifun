import { Typography } from '@mui/joy'

import { AppLayout } from '@/layouts/AppLayout'
import { NextPageWithLayout } from '@/types/layout'

const HomePage: NextPageWithLayout = () => {
  return <Typography>Home</Typography>
}

HomePage.getLayout = (page) => <AppLayout>{page}</AppLayout>

export default HomePage
