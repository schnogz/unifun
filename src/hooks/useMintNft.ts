import { useState } from 'react'
import { useReward } from 'react-rewards'
import { useWriteContract, useAccount, useWatchContractEvent } from 'wagmi'

import { UNI_CONTRACT_ABI, UNI_CONTRACT_ADDRESS } from '@/constants'
import { MintStatus } from '@/types/mint'

export const useMintNft = () => {
  const { address } = useAccount()
  const [tokenId, setTokenId] = useState<number | undefined>(undefined)
  const [status, setStatus] = useState<MintStatus>(MintStatus.NOT_STARTED)
  const [walletError, setWalletError] = useState<string | undefined>(undefined)

  const { data: txHash, error: txSendError, writeContract } = useWriteContract()
  const { reward: showConfetti } = useReward('newMintConfetti', 'emoji', {
    angle: 360,
    elementCount: 350,
    emoji: ['🦄', '🎉'],
    lifetime: 400,
    position: 'absolute',
    spread: 360,
    startVelocity: 50,
    zIndex: 9999,
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
