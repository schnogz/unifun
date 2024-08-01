import { useQuery } from '@tanstack/react-query'
import { renderHook } from '@testing-library/react'

import { NULL_ADDRESS } from '@/constants'

import { useFetchRecentMints } from './useFetchRecentMints'

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
}))
jest.mock('alchemy-sdk', () => ({
  Alchemy: jest.fn().mockImplementation(() => ({
    nft: {
      getTransfersForContract: jest.fn(),
    },
  })),
  Network: {
    ETH_SEPOLIA: 'eth-sepolia',
  },
  SortingOrder: {
    DESCENDING: 'DESCENDING',
  },
}))

describe('useFetchRecentMints', () => {
  const useQueryMock = useQuery as jest.Mock

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('returns empty data and loading state initially', () => {
    useQueryMock.mockReturnValue({
      data: undefined,
      isError: false,
      isLoading: true,
      refetch: jest.fn(),
    })

    const { result } = renderHook(() => useFetchRecentMints())

    expect(result.current.data.nfts).toEqual([])
    expect(result.current.isLoading).toBe(true)
    expect(result.current.isError).toBe(false)
  })

  test('returns filtered and limited NFTs when data is available', () => {
    const mockEvents = [
      { from: NULL_ADDRESS, id: '1', timestamp: '2023-01-01T00:00:00Z' },
      { from: '0x456', id: '2', timestamp: '2023-01-02T00:00:00Z' },
      { from: NULL_ADDRESS, id: '3', timestamp: '2023-01-03T00:00:00Z' },
      { from: NULL_ADDRESS, id: '4', timestamp: '2023-01-04T00:00:00Z' },
      // ... more events ...
    ]
    const mockFilteredEvents = mockEvents
      .filter((event) => event.from === NULL_ADDRESS)
      .slice(0, 10)
    useQueryMock.mockReturnValue({
      data: { nfts: mockEvents },
      isError: false,
      isLoading: false,
      refetch: jest.fn(),
    })

    const { result } = renderHook(() => useFetchRecentMints())

    expect(result.current.data.nfts).toEqual(mockFilteredEvents)
    expect(result.current.isLoading).toBe(false)
    expect(result.current.isError).toBe(false)
  })

  test('returns error state when there is an error fetching data', () => {
    useQueryMock.mockReturnValue({
      data: undefined,
      isError: true,
      isLoading: false,
      refetch: jest.fn(),
    })

    const { result } = renderHook(() => useFetchRecentMints())

    expect(result.current.isError).toBe(true)
    expect(result.current.isLoading).toBe(false)
  })

  test('refetchRecentMints function works correctly', () => {
    const refetchMock = jest.fn()
    useQueryMock.mockReturnValue({
      data: undefined,
      isError: false,
      isLoading: false,
      refetch: refetchMock,
    })

    const { result } = renderHook(() => useFetchRecentMints())

    result.current.refetchRecentMints()
    expect(refetchMock).toHaveBeenCalledTimes(1)
  })
})
