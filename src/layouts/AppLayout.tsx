import { ChevronRightRounded, HomeRounded } from '@mui/icons-material'
import { Box, Breadcrumbs, Typography, Link } from '@mui/joy'
import * as NextLink from 'next/link'
import { useRouter } from 'next/router'
import { PropsWithChildren } from 'react'

import ColorSchemeToggle from '@/components/ColorSchemeToggle'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { withWalletGuard } from '@/hocs/withWalletGuard'

export const AppLayout = withWalletGuard(({ children }: PropsWithChildren) => {
  const { pathname } = useRouter()

  // this is gross :)
  let pageTitle = ''
  switch (pathname) {
    case '/myNfts':
      pageTitle = 'My NFTs'
      break
    case '/':
    default:
      pageTitle = 'Home'
      break
  }

  return (
    <Box sx={{ display: 'flex', minHeight: '100dvh', overflow: 'hidden' }}>
      <Header />
      <Sidebar />
      <Box
        component='main'
        className='MainContent'
        sx={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          gap: 1,
          height: '100dvh',
          pb: { md: 3, sm: 2, xs: 2 },
          pt: {
            md: 1,
            sm: 'calc(12px + var(--Header-height))',
            xs: 'calc(12px + var(--Header-height))',
          },
          px: { md: 6, xs: 2 },
        }}
      >
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            pb: 2,
          }}
        >
          <Breadcrumbs
            size='sm'
            aria-label='breadcrumbs'
            separator={
              <Typography fontSize='sm' marginTop='4px'>
                <ChevronRightRounded />
              </Typography>
            }
            sx={{ pl: 0 }}
          >
            <Link
              component={NextLink.default}
              underline='none'
              color='neutral'
              href='/'
              aria-label='Home'
            >
              <HomeRounded />
            </Link>
            <Typography color='primary' fontWeight={500} fontSize='sm'>
              {pageTitle}
            </Typography>
          </Breadcrumbs>
          <ColorSchemeToggle />
        </Box>
        <Box
          sx={{
            mb: 1,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  )
})
