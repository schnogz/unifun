import CssBaseline from '@mui/joy/CssBaseline'
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles'
import { PropsWithChildren } from 'react'

import muiJoyTheme from '../styles/muiJoy'

export const StyleProvider = ({ children }: PropsWithChildren) => {
  return (
    <StyledEngineProvider injectFirst>
      <CssVarsProvider theme={muiJoyTheme} defaultMode='dark' disableTransitionOnChange>
        <CssBaseline />
        {children}
      </CssVarsProvider>
    </StyledEngineProvider>
  )
}
