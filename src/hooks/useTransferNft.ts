import { useState } from 'react'
import { useWriteContract, useAccount } from 'wagmi'

import { UNI_CONTRACT_ABI, UNI_CONTRACT_ADDRESS } from '@/constants'

export const useTransferNft = () => {
  const { address } = useAccount()
  const [walletError, setWalletError] = useState<boolean | undefined>(undefined)

  const {
    data: txHash,
    error: txSendError,
    isPending,
    isSuccess,
    writeContract,
  } = useWriteContract()

  const transferNft = async (tokenId: string, toAddress: string) => {
    writeContract(
      {
        abi: UNI_CONTRACT_ABI,
        address: UNI_CONTRACT_ADDRESS,
        args: [address as `0x${string}`, toAddress as `0x${string}`, BigInt(tokenId)],
        functionName: 'transferFrom',
      },
      {
        onError: (): void => {
          setWalletError(true)
        },
      },
    )
  }

  return {
    isError: txSendError || walletError || undefined,
    isPending,
    isSuccess,
    transferNft,
    txHash,
  }
}
