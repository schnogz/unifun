import { Box } from '@mui/joy'
import { PropsWithChildren } from 'react'

export default function PublicLayout({ children }: PropsWithChildren) {
  return <Box sx={{ display: 'flex', minHeight: '100dvh' }}>{children}</Box>
}
