import { render, screen } from '@testing-library/react'
import { useRouter } from 'next/router'
import { useAccount } from 'wagmi'

import { withWalletGuard } from './withWalletGuard'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))
jest.mock('wagmi', () => ({
  useAccount: jest.fn(),
}))

const MockComponent = () => <div>Mock Component</div>
const WrappedComponent = withWalletGuard(MockComponent)

describe('withWalletGuard', () => {
  const useRouterMock = useRouter as jest.Mock
  const useAccountMock = useAccount as jest.Mock

  beforeEach(() => {
    useRouterMock.mockReturnValue({ push: jest.fn() })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('should redirect to /connectWallet when wallet is disconnected', () => {
    useAccountMock.mockReturnValue({ status: 'disconnected' })
    render(<WrappedComponent />)

    expect(useRouterMock().push).toHaveBeenCalledWith('/connectWallet')
  })

  test('should render loading screen when wallet status is undefined', () => {
    useAccountMock.mockReturnValue({})
    render(<WrappedComponent />)

    expect(screen.getByRole('progressbar')).toBeInTheDocument()
  })

  test('should render WrappedComponent when wallet is connected', () => {
    useAccountMock.mockReturnValue({ status: 'connected' })
    render(<WrappedComponent />)

    expect(screen.getByText('Mock Component')).toBeInTheDocument()
  })
})
