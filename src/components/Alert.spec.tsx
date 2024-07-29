import { render, screen, fireEvent, waitFor } from '@testing-library/react'

import { Alert } from '@/components/Alert'

jest.useFakeTimers()

describe('Alert', () => {
  it('renders error alert correctly', () => {
    render(<Alert type='error' message='This is an error message' title='Error' />)
    expect(screen.getByText('Error')).toBeInTheDocument()
    expect(screen.getByText('This is an error message')).toBeInTheDocument()
    expect(screen.getByTestId('ReportRoundedIcon')).toBeInTheDocument()
  })

  it('renders warning alert correctly', () => {
    render(<Alert type='warning' message='This is a warning message' title='Warning' />)
    expect(screen.getByText('Warning')).toBeInTheDocument()
    expect(screen.getByText('This is a warning message')).toBeInTheDocument()
    expect(screen.getByTestId('WarningRoundedIcon')).toBeInTheDocument()
  })

  it('renders success alert correctly', () => {
    render(<Alert type='success' message='This is a success message' title='Success' />)
    expect(screen.getByText('Success')).toBeInTheDocument()
    expect(screen.getByText('This is a success message')).toBeInTheDocument()
    expect(screen.getByTestId('CheckCircleRoundedIcon')).toBeInTheDocument()
  })

  it('disappears after 5 seconds', async () => {
    render(<Alert type='success' message='This is a success message' title='Success' />)
    expect(screen.getByText('Success')).toBeInTheDocument()
    expect(screen.getByText('This is a success message')).toBeInTheDocument()

    jest.advanceTimersByTime(5000)
    await waitFor(() => {
      expect(screen.queryByText('Success')).not.toBeInTheDocument()
      expect(screen.queryByText('This is a success message')).not.toBeInTheDocument()
    })
  })

  it('disappears when close button is clicked', async () => {
    render(<Alert type='success' message='This is a success message' title='Success' />)
    expect(screen.getByText('Success')).toBeInTheDocument()
    expect(screen.getByText('This is a success message')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button'))
    await waitFor(() => {
      expect(screen.queryByText('Success')).not.toBeInTheDocument()
      expect(screen.queryByText('This is a success message')).not.toBeInTheDocument()
    })
  })
})
