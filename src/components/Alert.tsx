import {
  CheckCircleRounded,
  CloseRounded,
  ReportRounded,
  WarningRounded,
} from '@mui/icons-material'
import { Alert as JoyAlert, Box, IconButton, ColorPaletteProp, Typography, Stack } from '@mui/joy'
import { useEffect, useState } from 'react'

export type AlertProps = {
  type: 'error' | 'warning' | 'success'
  message: string
  title: string
}

export const Alert = ({ message, title, type }: AlertProps) => {
  let color, icon
  switch (type) {
    case 'error':
      color = 'danger'
      icon = <ReportRounded />
      break
    case 'warning':
      color = 'warning'
      icon = <WarningRounded />
      break
    case 'success':
    default:
      color = 'success'
      icon = <CheckCircleRounded />
      break
  }

  const [isShowing, setIsShowing] = useState<boolean>(false)

  // auto remove alert after 5 seconds
  useEffect(() => {
    setIsShowing(true)
    const timer = setTimeout(() => {
      setIsShowing(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return isShowing ? (
    <Box
      component='div'
      sx={{
        bottom: 25,
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        right: 25,
        width: '450px',
        zIndex: 9999,
      }}
    >
      <JoyAlert
        startDecorator={icon}
        variant='solid'
        color={color as ColorPaletteProp}
        endDecorator={
          <IconButton
            variant='solid'
            size='sm'
            color={color as ColorPaletteProp}
            onClick={() => setIsShowing(false)}
          >
            <CloseRounded />
          </IconButton>
        }
      >
        <Stack>
          <Typography fontSize='md' fontWeight='bold'>
            {title}
          </Typography>
          <Typography fontSize='xs'>{message.substring(0, 100)}</Typography>
        </Stack>
      </JoyAlert>
    </Box>
  ) : null
}
