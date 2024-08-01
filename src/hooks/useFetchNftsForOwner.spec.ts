import { useQuery } from '@tanstack/react-query'
import { renderHook } from '@testing-library/react'
import dayJs from 'dayjs'
import { useAccount } from 'wagmi'

import { useFetchNftsForOwner } from './useFetchNftsForOwner'

jest.mock('wagmi', () => ({
  useAccount: jest.fn(),
}))
jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
}))
jest.mock('alchemy-sdk', () => ({
  Alchemy: jest.fn().mockImplementation(() => ({
    nft: {
      getNftsForOwner: jest.fn(),
    },
  })),
  Network: {
    ETH_SEPOLIA: 'eth-sepolia',
  },
}))

describe('useFetchNftsForOwner', () => {
  const useAccountMock = useAccount as jest.Mock
  const useQueryMock = useQuery as jest.Mock

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('returns sorted NFTs and no error or loading state when data is available', () => {
    const address = '0x123'
    const mockNfts = [
      {
        mint: { timestamp: '2023-01-01T00:00:00Z' },
        timeLastUpdated: '2023-01-01T00:00:00Z',
      },
      {
        mint: { timestamp: '2023-02-01T00:00:00Z' },
        timeLastUpdated: '2023-02-01T00:00:00Z',
      },
    ]
    const sortedNfts = [...mockNfts].sort((a, b) =>
      dayJs(b.mint?.timestamp ?? b.timeLastUpdated).isAfter(
        dayJs(a.mint?.timestamp ?? a.timeLastUpdated),
      )
        ? 1
        : -1,
    )
    useAccountMock.mockReturnValue({ address })
    useQueryMock.mockReturnValue({
      data: { ownedNfts: mockNfts },
      isError: false,
      isLoading: false,
      refetch: jest.fn(),
    })

    const { result } = renderHook(() => useFetchNftsForOwner())

    expect(result.current.data?.ownedNfts).toEqual(sortedNfts)
    expect(result.current.isLoading).toBe(false)
    expect(result.current.isError).toBe(false)
  })

  test('returns error state when there is an error fetching data', () => {
    useAccountMock.mockReturnValue({ address: '0x123' })
    useQueryMock.mockReturnValue({
      data: undefined,
      isError: true,
      isLoading: false,
      refetch: jest.fn(),
    })

    const { result } = renderHook(() => useFetchNftsForOwner())

    expect(result.current.isError).toBe(true)
    expect(result.current.isLoading).toBe(false)
  })

  test('refetchNftsForOwner function works correctly', () => {
    const refetchMock = jest.fn()
    useAccountMock.mockReturnValue({ address: '0x123' })
    useQueryMock.mockReturnValue({
      data: undefined,
      isError: false,
      isLoading: false,
      refetch: refetchMock,
    })

    const { result } = renderHook(() => useFetchNftsForOwner())

    result.current.refetchNftsForOwner()
    expect(refetchMock).toHaveBeenCalledTimes(1)
  })
})
