import { renderHook, act } from '@testing-library/react'
import { useWriteContract, useAccount, useWatchContractEvent } from 'wagmi'

import { UNI_CONTRACT_ABI, UNI_CONTRACT_ADDRESS } from '@/constants'
import { MintStatus } from '@/types/mint'

import { useMintNft } from './useMintNft'

jest.mock('wagmi', () => ({
  useAccount: jest.fn(),
  useWatchContractEvent: jest.fn(),
  useWriteContract: jest.fn(),
}))

describe('useMintNft', () => {
  const useAccountMock = useAccount as jest.Mock
  const useWriteContractMock = useWriteContract as jest.Mock
  const useWatchContractEventMock = useWatchContractEvent as jest.Mock

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('initial state is correct', () => {
    useAccountMock.mockReturnValue({ address: '0x123' })
    useWriteContractMock.mockReturnValue({
      data: undefined,
      error: undefined,
      writeContract: jest.fn(),
    })
    useWatchContractEventMock.mockImplementation(() => {})

    const { result } = renderHook(() => useMintNft())

    expect(result.current.data.tokenId).toBeUndefined()
    expect(result.current.data.txHash).toBeUndefined()
    expect(result.current.mintError).toBeUndefined()
    expect(result.current.mintStatus).toBe(MintStatus.NOT_STARTED)
  })

  test('sets status to PENDING_TX_SEND and calls writeContract on mintNft', async () => {
    const writeContractMock = jest.fn()
    useAccountMock.mockReturnValue({ address: '0x123' })
    useWriteContractMock.mockReturnValue({
      data: undefined,
      error: undefined,
      writeContract: writeContractMock,
    })
    useWatchContractEventMock.mockImplementation(() => {})

    const { result } = renderHook(() => useMintNft())

    await act(async () => {
      await result.current.mintNft()
    })

    expect(result.current.mintStatus).toBe(MintStatus.PENDING_TX_SEND)
    expect(writeContractMock).toHaveBeenCalledWith(
      {
        abi: UNI_CONTRACT_ABI,
        address: UNI_CONTRACT_ADDRESS,
        args: ['0x123'],
        functionName: 'mint',
      },
      expect.any(Object),
    )
  })

  test('sets status to PENDING_MINT on writeContract success', async () => {
    const writeContractMock = (args: [], { onSuccess }: { onSuccess: () => void }) => onSuccess()
    useAccountMock.mockReturnValue({ address: '0x123' })
    useWriteContractMock.mockReturnValue({
      data: undefined,
      error: undefined,
      writeContract: writeContractMock,
    })
    useWatchContractEventMock.mockImplementation(() => {})

    const { result } = renderHook(() => useMintNft())

    await act(async () => {
      await result.current.mintNft()
    })

    expect(result.current.mintStatus).toBe(MintStatus.PENDING_MINT)
  })

  test('sets status to ERROR on writeContract error', async () => {
    const error = new Error('Transaction failed')
    const writeContractMock = (args: [], { onError }: { onError: (e: Error) => void }) =>
      onError(error)
    useAccountMock.mockReturnValue({ address: '0x123' })
    useWriteContractMock.mockReturnValue({
      data: undefined,
      error: undefined,
      writeContract: writeContractMock,
    })
    useWatchContractEventMock.mockImplementation(() => {})

    const { result } = renderHook(() => useMintNft())

    await act(async () => {
      await result.current.mintNft()
    })

    expect(result.current.mintStatus).toBe(MintStatus.ERROR)
    expect(result.current.mintError).toBe('Error')
  })

  test('refetches mint status on polling', async () => {
    const address = '0x123'
    useAccountMock.mockReturnValue({ address })
    useWriteContractMock.mockReturnValue({
      data: undefined,
      error: undefined,
      writeContract: jest.fn(),
    })

    useWatchContractEventMock.mockImplementation(() => {})

    const { result } = renderHook(() => useMintNft())

    // Simulate status change
    act(() => {
      result.current.mintNft()
    })

    expect(useWatchContractEvent).toHaveBeenCalledWith(
      expect.objectContaining({
        enabled: true,
        poll: true,
        pollingInterval: 1000,
      }),
    )
  })
})
