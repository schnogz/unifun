import { inputClasses } from '@mui/joy/Input'
import { extendTheme } from '@mui/joy/styles'

/* eslint-disable sort-keys, sort-keys-fix/sort-keys-fix */
export default extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        background: {
          body: '#0a0a0a',
          surface: 'var(--joy-palette-neutral-900)',
        },
        primary: {
          50: '#3F1433',
          100: '#6D2C64',
          200: '#9B4395',
          300: '#C95AC6',
          400: '#FA6AFF',
          500: '#FC72FF',
          600: '#FB84FF',
          700: '#FCA7FF',
          800: '#FDC8FF',
          900: '#FEE4FF',
          solidActiveBg: 'var(--joy-palette-primary-400)',
          solidBg: 'var(--joy-palette-primary-600)',
          solidColor: 'var(--joy-palette-common-black)',
          solidHoverBg: 'var(--joy-palette-primary-500)',
        },
      },
    },
    light: {
      palette: {
        background: {
          body: '#f0f4f8',
          surface: 'var(--joy-palette-neutral-100)',
        },
        primary: {
          50: '#FEE4FF',
          100: '#FDC8FF',
          200: '#FCA7FF',
          300: '#FB84FF',
          400: '#FA6AFF',
          500: '#FC72FF',
          600: '#C95AC6',
          700: '#9B4395',
          800: '#6D2C64',
          900: '#3F1433',
          solidActiveBg: 'var(--joy-palette-primary-400)',
          solidBg: 'var(--joy-palette-primary-500)',
          solidHoverBg: 'var(--joy-palette-primary-600)',
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
