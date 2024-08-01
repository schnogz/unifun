import { renderHook, act } from '@testing-library/react'
import { useWriteContract, useAccount } from 'wagmi'

import { UNI_CONTRACT_ABI, UNI_CONTRACT_ADDRESS } from '@/constants'

import { useTransferNft } from './useTransferNft'

jest.mock('wagmi', () => ({
  useAccount: jest.fn(),
  useWriteContract: jest.fn(),
}))

describe('useTransferNft', () => {
  const useAccountMock = useAccount as jest.Mock
  const useWriteContractMock = useWriteContract as jest.Mock

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('initial state is correct', () => {
    useAccountMock.mockReturnValue({ address: '0x123' })
    useWriteContractMock.mockReturnValue({
      data: undefined,
      error: undefined,
      isPending: false,
      isSuccess: false,
      writeContract: jest.fn(),
    })

    const { result } = renderHook(() => useTransferNft())

    expect(result.current.isError).toBeUndefined()
    expect(result.current.isPending).toBe(false)
    expect(result.current.isSuccess).toBe(false)
    expect(result.current.txHash).toBeUndefined()
  })

  test('sets isError when there is a txSendError', () => {
    useAccountMock.mockReturnValue({ address: '0x123' })
    useWriteContractMock.mockReturnValue({
      data: undefined,
      error: new Error('Transaction error'),
      isPending: false,
      isSuccess: false,
      writeContract: jest.fn(),
    })

    const { result } = renderHook(() => useTransferNft())

    expect(result.current.isError).toBeInstanceOf(Error)
  })

  test('sets walletError when onError is called in writeContract', async () => {
    const writeContractMock = (args: [], { onError }: { onError: () => void }) => onError()
    useAccountMock.mockReturnValue({ address: '0x123' })
    useWriteContractMock.mockReturnValue({
      data: undefined,
      error: undefined,
      isPending: false,
      isSuccess: false,
      writeContract: writeContractMock,
    })

    const { result } = renderHook(() => useTransferNft())

    await act(async () => {
      await result.current.transferNft('1', '0x456')
    })

    expect(result.current.isError).toBe(true)
  })

  test('calls writeContract with correct arguments on transferNft', async () => {
    const writeContractMock = jest.fn()
    useAccountMock.mockReturnValue({ address: '0x123' })
    useWriteContractMock.mockReturnValue({
      data: undefined,
      error: undefined,
      isPending: false,
      isSuccess: false,
      writeContract: writeContractMock,
    })

    const { result } = renderHook(() => useTransferNft())

    await act(async () => {
      await result.current.transferNft('1', '0x456')
    })

    expect(writeContractMock).toHaveBeenCalledWith(
      {
        abi: UNI_CONTRACT_ABI,
        address: UNI_CONTRACT_ADDRESS,
        args: ['0x123', '0x456', BigInt(1)],
        functionName: 'transferFrom',
      },
      expect.any(Object),
    )
  })

  test('sets isSuccess when writeContract is successful', () => {
    useAccountMock.mockReturnValue({ address: '0x123' })
    useWriteContractMock.mockReturnValue({
      data: '0x789',
      error: undefined,
      isPending: false,
      isSuccess: true,
      writeContract: jest.fn(),
    })

    const { result } = renderHook(() => useTransferNft())

    expect(result.current.isSuccess).toBe(true)
    expect(result.current.txHash).toBe('0x789')
  })

  test('sets isPending during writeContract execution', () => {
    useAccountMock.mockReturnValue({ address: '0x123' })
    useWriteContractMock.mockReturnValue({
      data: undefined,
      error: undefined,
      isPending: true,
      isSuccess: false,
      writeContract: jest.fn(),
    })

    const { result } = renderHook(() => useTransferNft())

    expect(result.current.isPending).toBe(true)
  })
})
