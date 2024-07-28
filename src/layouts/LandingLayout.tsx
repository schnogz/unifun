import { Box, Stack } from '@mui/joy'
import { ReactNode } from 'react'

import ColorSchemeToggle from '@/components/ColorSchemeToggle'

export const LandingLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <Box sx={{ flex: 1, position: 'relative' }}>
          <Stack sx={{ height: '100%' }}>
            <Box
              sx={{
                padding: 3,
                position: 'sticky',
                top: 0,
                zIndex: 2,
              }}
            >
              <Stack direction='row' justifyContent='flex-end'>
                <ColorSchemeToggle />
              </Stack>
            </Box>
            <Stack alignItems='center' justifyContent='center' flex={1} p={2}>
              {children}
            </Stack>
          </Stack>
        </Box>
        <Box
          sx={{
            backgroundImage:
              'url("https://i.ibb.co/7GpVy0k/c3c7120d-52e8-4b36-ae26-ef33b11dcb39.jpg")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            display: {
              md: 'block',
              xs: 'none',
            },
            flex: 1,
          }}
        />
      </Box>
    </>
  )
}
