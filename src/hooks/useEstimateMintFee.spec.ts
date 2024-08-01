import { renderHook } from '@testing-library/react'
import { encodeFunctionData, formatEther } from 'viem'
import { useAccount, useEstimateGas, useGasPrice } from 'wagmi'

import { UNI_CONTRACT_ABI } from '@/constants'

import { useEstimateMintFee } from './useEstimateMintFee'

// Mock dependencies
jest.mock('wagmi', () => ({
  useAccount: jest.fn(),
  useEstimateGas: jest.fn(),
  useGasPrice: jest.fn(),
}))

jest.mock('viem', () => ({
  encodeFunctionData: jest.fn(),
  formatEther: jest.fn(),
}))

describe('useEstimateMintFee', () => {
  const useAccountMock = useAccount as jest.Mock
  const useGasPriceMock = useGasPrice as jest.Mock
  const useEstimateGasMock = useEstimateGas as jest.Mock
  const encodeFunctionDataMock = encodeFunctionData as jest.Mock
  const formatEtherMock = formatEther as jest.Mock

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('returns 0 fee when address is not available', () => {
    useAccountMock.mockReturnValue({ address: undefined })
    useGasPriceMock.mockReturnValue({ data: undefined })
    useEstimateGasMock.mockReturnValue({ data: undefined, isLoading: false })

    const { result } = renderHook(() => useEstimateMintFee())

    expect(result.current.estimatedMintFee).toBe('0')
    expect(result.current.isLoading).toBe(false)
  })

  test('returns 0 fee when gas price is not available', () => {
    useAccountMock.mockReturnValue({ address: '0x123' })
    useGasPriceMock.mockReturnValue({ data: undefined })
    useEstimateGasMock.mockReturnValue({ data: undefined, isLoading: false })

    const { result } = renderHook(() => useEstimateMintFee())

    expect(result.current.estimatedMintFee).toBe('0')
    expect(result.current.isLoading).toBe(false)
  })

  test('returns 0 fee when estimated gas used is not available', () => {
    useAccountMock.mockReturnValue({ address: '0x123' })
    useGasPriceMock.mockReturnValue({ data: '1000000000' }) // 1 Gwei
    useEstimateGasMock.mockReturnValue({ data: undefined, isLoading: false })

    const { result } = renderHook(() => useEstimateMintFee())

    expect(result.current.estimatedMintFee).toBe('0')
    expect(result.current.isLoading).toBe(false)
  })

  test('returns estimated mint fee when data is available', () => {
    const address = '0x123'
    const functionData = '0xabcdef'
    const gasPrice = '1000000000' // 1 Gwei
    const estimatedGasUsed = '21000'

    useAccountMock.mockReturnValue({ address })
    useGasPriceMock.mockReturnValue({ data: gasPrice })
    useEstimateGasMock.mockReturnValue({ data: estimatedGasUsed, isLoading: false })
    encodeFunctionDataMock.mockReturnValue(functionData)
    formatEtherMock.mockReturnValue('0.021')

    const { result } = renderHook(() => useEstimateMintFee())

    expect(encodeFunctionData).toHaveBeenCalledWith({
      abi: UNI_CONTRACT_ABI,
      args: [address],
      functionName: 'mint',
    })
    expect(result.current.estimatedMintFee).toBe('0.021')
    expect(result.current.isLoading).toBe(false)
  })

  test('handles loading state', () => {
    useAccountMock.mockReturnValue({ address: '0x123' })
    useGasPriceMock.mockReturnValue({ data: '1000000000' }) // 1 Gwei
    useEstimateGasMock.mockReturnValue({ data: undefined, isLoading: true })

    const { result } = renderHook(() => useEstimateMintFee())

    expect(result.current.isLoading).toBe(true)
  })
})
