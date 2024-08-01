import { Box } from '@mui/joy'
import { PropsWithChildren } from 'react'

import Header from '@/components/Header'

export const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100dvh', overflow: 'hidden' }}>
      <Header />
      {/*<Sidebar />*/}
      <Box
        component='main'
        className='MainContent'
        sx={{
          display: 'flex',
          flex: 1,
          height: '100dvh',
          overflow: 'scroll',
          pt: 12,
          px: 6,
        }}
      >
        {children}
      </Box>
    </Box>
  )
}
