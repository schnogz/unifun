import { useConnectModal } from '@rainbow-me/rainbowkit'
import { render, screen, fireEvent } from '@testing-library/react'
import { useRouter } from 'next/router'
import { useAccount } from 'wagmi'

import ConnectWalletPage from './connectWallet.page'

jest.mock('wagmi', () => ({
  useAccount: jest.fn(),
}))
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))
jest.mock('@rainbow-me/rainbowkit', () => ({
  useConnectModal: jest.fn(),
}))

describe('ConnectPage', () => {
  const mockPush = jest.fn()
  const openConnectModal = jest.fn()
  const useAccountMock = useAccount as jest.Mock
  const useRouterMock = useRouter as jest.Mock
  const useConnectModalMock = useConnectModal as jest.Mock

  beforeEach(() => {
    useAccountMock.mockReturnValue({ isConnected: false })
    useRouterMock.mockReturnValue({ push: mockPush })
    useConnectModalMock.mockReturnValue({ openConnectModal })
  })

  it('renders correctly', () => {
    render(<ConnectWalletPage />)
    expect(screen.getByTestId('connectWalletBtn')).toBeInTheDocument()
    expect(screen.getByTestId('learnMoreBtn')).toBeInTheDocument()
  })

  it('opens connect modal when "Connect Wallet" button is clicked', () => {
    render(<ConnectWalletPage />)
    fireEvent.click(screen.getByTestId('connectWalletBtn'))
    expect(openConnectModal).toHaveBeenCalled()
  })

  it('has a link to the correct URL for "Learn More" button', () => {
    render(<ConnectWalletPage />)
    const learnMoreButton = screen.getByTestId('learnMoreBtn')
    expect(learnMoreButton.closest('a')).toHaveAttribute('href', 'https://uniswap.org/')
  })

  it('redirects to home page when account is connected', () => {
    useAccountMock.mockReturnValue({ isConnected: true })
    render(<ConnectWalletPage />)
    expect(mockPush).toHaveBeenCalledWith('/')
  })
})
