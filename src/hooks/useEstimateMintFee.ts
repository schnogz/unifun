import { useEffect, useState } from 'react'
import { encodeFunctionData, formatEther } from 'viem'
import { useAccount, useEstimateGas, useGasPrice } from 'wagmi'

import { UNI_CONTRACT_ABI, UNI_CONTRACT_ADDRESS, NULL_ADDRESS } from '@/constants'

export const useEstimateMintFee = () => {
  const { address } = useAccount()
  const [functionData, setFunctionData] = useState<undefined | `0x${string}`>(undefined)
  const { data: gasPrice } = useGasPrice()

  useEffect(() => {
    if (address) {
      const functionData = encodeFunctionData({
        abi: UNI_CONTRACT_ABI,
        args: [address],
        functionName: 'mint',
      })
      setFunctionData(functionData)
    }
  }, [address])

  const { data: estimatedGasUsed, isLoading } = useEstimateGas({
    data: functionData ?? NULL_ADDRESS,
    to: UNI_CONTRACT_ADDRESS,
  })

  return {
    estimatedMintFee: estimatedGasUsed && gasPrice ? formatEther(estimatedGasUsed * gasPrice) : '0',
    isLoading,
  }
}
