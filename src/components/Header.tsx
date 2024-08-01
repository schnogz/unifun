import { GlobalStyles, Sheet } from '@mui/joy'

import { Logo } from '@/assets/Logo'
import ColorSchemeToggle from '@/components/ColorSchemeToggle'

export default function Header() {
  return (
    <Sheet
      sx={(theme) => ({
        alignItems: 'center',
        backgroundColor: theme.palette.background.body,
        display: 'flex',
        gap: 1,
        height: 'var(--Header-height)',
        justifyContent: 'space-between',
        position: 'fixed',
        px: 6,
        py: 2,
        top: 0,
        width: '100vw',
      })}
    >
      <GlobalStyles
        styles={{
          ':root': {
            '--Header-height': '52px',
          },
        }}
      />
      <Logo />
      <ColorSchemeToggle />
    </Sheet>
  )
}
