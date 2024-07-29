import { useState } from 'react'
import { useReward } from 'react-rewards'
import { useWriteContract, useAccount, useWatchContractEvent } from 'wagmi'

import { UNI_CONTRACT_ABI, UNI_CONTRACT_ADDRESS } from '@/constants'

export enum MintStatus {
  COMPLETED = 'COMPLETED',
  ERROR = 'ERROR',
  NOT_STARTED = 'NOT_STARTED',
  PENDING_TX_SEND = 'PENDING_TX_SEND',
  PENDING_MINT = 'PENDING_MINT',
}

export const useMintNft = () => {
  const { address } = useAccount()
  const [tokenId, setTokenId] = useState<number | undefined>(undefined)
  const [status, setStatus] = useState<MintStatus>(MintStatus.NOT_STARTED)
  const [walletError, setWalletError] = useState<string | undefined>(undefined)
  const { data: txHash, error: txSendError, writeContract } = useWriteContract()
  const { reward: showConfetti } = useReward('newMintConfetti', 'confetti', {
    elementCount: 500,
    lifetime: 5000,
    spread: 360,
  })

  useWatchContractEvent({
    abi: UNI_CONTRACT_ABI,
    address: UNI_CONTRACT_ADDRESS,
    enabled:
      status !== MintStatus.NOT_STARTED &&
      status !== MintStatus.COMPLETED &&
      status !== MintStatus.ERROR,
    eventName: 'Transfer',
    onLogs: (logs) => {
      logs.forEach(({ args }) => {
        if (args.to === address) {
          setTokenId(Number(args.tokenId))
          setStatus(MintStatus.COMPLETED)
          // need to ensure id is rendered in dom before show
          setTimeout(() => {
            showConfetti()
          }, 250)
        }
      })
    },
    poll: true,
    pollingInterval: 1_000,
    syncConnectedChain: true,
  })

  const mintNft = async (externalAddress?: `0x${string}`) => {
    setStatus(MintStatus.PENDING_TX_SEND)

    writeContract(
      {
        abi: UNI_CONTRACT_ABI,
        address: UNI_CONTRACT_ADDRESS,
        args: [externalAddress ?? (address as `0x${string}`)],
        functionName: 'mint',
      },
      {
        onError: (error): void => {
          setStatus(MintStatus.ERROR)
          setWalletError(error?.name ?? 'Wallet failed to sign/send transaction')
        },
        onSuccess: (): void => setStatus(MintStatus.PENDING_MINT),
      },
    )
  }

  return {
    data: {
      tokenId,
      txHash,
    },
    mintError: txSendError?.toString() ?? walletError?.toString() ?? undefined,
    mintNft,
    mintStatus: status,
  }
}
