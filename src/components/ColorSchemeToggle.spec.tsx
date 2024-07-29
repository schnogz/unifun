import { useColorScheme } from '@mui/joy'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'

import ColorSchemeToggle from './ColorSchemeToggle'

jest.mock('@mui/joy', () => ({
  ...jest.requireActual('@mui/joy'),
  useColorScheme: jest.fn(),
}))

describe('ColorSchemeToggle', () => {
  const useColorSchemeMock = useColorScheme as jest.Mock
  const setModeSpy = jest.fn()

  beforeEach(() => {
    useColorSchemeMock.mockReturnValue({
      mode: 'light',
      setMode: setModeSpy,
    })
  })

  it('renders correctly after mounting', async () => {
    render(<ColorSchemeToggle />)
    const button = await screen.findByRole('button')
    await waitFor(() => expect(button).not.toBeDisabled())
  })

  it('toggles to dark mode when clicked in light mode', async () => {
    render(<ColorSchemeToggle />)
    const button = await screen.findByRole('button')
    await waitFor(() => expect(button).not.toBeDisabled())
    fireEvent.click(button)
    expect(setModeSpy).toHaveBeenCalledWith('dark')
  })

  it('toggles to light mode when clicked in dark mode', async () => {
    useColorSchemeMock.mockReturnValue({
      mode: 'dark',
      setMode: setModeSpy,
    })
    render(<ColorSchemeToggle />)
    const button = await screen.findByRole('button')
    await waitFor(() => expect(button).not.toBeDisabled())
    fireEvent.click(button)
    expect(setModeSpy).toHaveBeenCalledWith('light')
  })

  it('calls the provided onClick handler', async () => {
    const onClick = jest.fn()
    render(<ColorSchemeToggle onClick={onClick} />)
    const button = await screen.findByRole('button')
    await waitFor(() => expect(button).not.toBeDisabled())
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalled()
  })
})
