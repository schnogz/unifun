import { Box } from '@mui/joy'
import { PropsWithChildren } from 'react'

import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { withWalletGuard } from '@/hocs/withWalletGuard'

export const AppLayout = withWalletGuard(({ children }: PropsWithChildren) => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100dvh', overflow: 'hidden' }}>
      <Header />
      <Sidebar />
      <Box
        component='main'
        className='MainContent'
        sx={(theme) => ({
          display: 'flex',
          flex: 1,
          height: '100dvh',
          mt: 4,
          overflow: 'scroll',
          p: 6,
          [theme.breakpoints.up('md')]: {
            mt: 0,
          },
        })}
      >
        {children}
      </Box>
    </Box>
  )
})
