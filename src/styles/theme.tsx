import { inputClasses } from '@mui/joy/Input'
import { extendTheme } from '@mui/joy/styles'

/* eslint-disable sort-keys, sort-keys-fix/sort-keys-fix */
export default extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        background: {
          body: 'var(--joy-palette-common-black)',
          surface: 'var(--joy-palette-neutral-900)',
        },
        primary: {
          50: '#880e4f',
          100: '#ad1457',
          200: '#c2185b',
          300: '#d81b60',
          400: '#e91e63',
          500: '#ec407a',
          600: '#f06292',
          700: '#f48fb1',
          800: '#f8bbd0',
          900: '#fce4ec',
          solidActiveBg: 'var(--joy-palette-primary-400)',
          solidBg: 'var(--joy-palette-primary-700)',
          solidColor: 'var(--joy-palette-common-black)',
          solidHoverBg: 'var(--joy-palette-primary-600)',
        },
      },
    },
    light: {
      palette: {
        primary: {
          50: '#fce4ec',
          100: '#f8bbd0',
          200: '#f48fb1',
          300: '#f06292',
          400: '#ec407a',
          500: '#e91e63',
          600: '#d81b60',
          700: '#c2185b',
          800: '#ad1457',
          900: '#880e4f',
          solidActiveBg: 'var(--joy-palette-primary-400)',
          solidBg: 'var(--joy-palette-primary-600)',
          solidHoverBg: 'var(--joy-palette-primary-500)',
        },
      },
    },
  },
  components: {
    JoyInput: {
      styleOverrides: {
        input: {
          caretColor: 'var(--Input-focusedHighlight)',
        },
        root: ({ ownerState, theme }) => ({
          ...(ownerState.variant === 'outlined' && {
            [`&:not(.${inputClasses.focused}):hover::before`]: {
              boxShadow: `inset 0 0 0 2px ${
                theme.vars.palette?.[ownerState.color!]?.outlinedBorder
              }`,
            },
          }),
        }),
      },
    },
  },
  fontFamily: {
    body: "'Inter', var(--joy-fontFamily-fallback)",
    display: "'Inter', var(--joy-fontFamily-fallback)",
  },
})
