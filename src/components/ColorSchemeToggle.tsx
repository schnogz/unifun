import { DarkModeRounded, LightModeRounded } from '@mui/icons-material'
import { IconButton, IconButtonProps, useColorScheme } from '@mui/joy'
import { useState, useEffect } from 'react'

export default function ColorSchemeToggle(props: IconButtonProps) {
  const { onClick, sx, ...other } = props
  const { mode, setMode } = useColorScheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <IconButton size='md' variant='outlined' color='neutral' {...other} sx={sx} disabled />
  }

  return (
    <IconButton
      id='toggle-mode'
      size='md'
      color='neutral'
      {...other}
      onClick={(event) => {
        if (mode === 'light') {
          setMode('dark')
        } else {
          setMode('light')
        }
        onClick?.(event)
      }}
      sx={[
        {
          '& > *:first-of-type': {
            display: mode === 'dark' ? 'none' : 'initial',
          },
          '& > *:last-child': {
            display: mode === 'light' ? 'none' : 'initial',
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <DarkModeRounded />
      <LightModeRounded />
    </IconButton>
  )
}
