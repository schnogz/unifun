import { MenuRounded } from '@mui/icons-material'
import { GlobalStyles, IconButton, Sheet } from '@mui/joy'

import { toggleSidebar } from '@/utils/sidebar'

export default function Header() {
  return (
    <Sheet
      sx={{
        alignItems: 'center',
        boxShadow: 'sm',
        display: { md: 'none', xs: 'flex' },
        gap: 1,
        height: 'var(--Header-height)',
        justifyContent: 'space-between',
        p: 2,
        position: 'fixed',
        top: 0,
        width: '100vw',
        zIndex: 9995,
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ':root': {
            '--Header-height': '52px',
            [theme.breakpoints.up('md')]: {
              '--Header-height': '0px',
            },
          },
        })}
      />
      <IconButton onClick={() => toggleSidebar()} variant='outlined' color='neutral' size='sm'>
        <MenuRounded />
      </IconButton>
    </Sheet>
  )
}
