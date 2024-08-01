import { darkTheme, lightTheme } from '@rainbow-me/rainbowkit'

const darkRainbowKitTheme = darkTheme({
  accentColor: '#FC72FF',
  accentColorForeground: '#000',
  borderRadius: 'medium',
  fontStack: 'system',
  overlayBlur: 'small',
})

const lightRainbowKitTheme = lightTheme({
  accentColor: '#FC72FF',
  accentColorForeground: '#FFFFFF',
  borderRadius: 'medium',
  fontStack: 'system',
  overlayBlur: 'small',
})

export { darkRainbowKitTheme, lightRainbowKitTheme }
