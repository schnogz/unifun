import { useQuery } from '@tanstack/react-query'
import { OwnedNftsResponse, Alchemy, Network } from 'alchemy-sdk'
import dayJs from 'dayjs'
import { useAccount } from 'wagmi'

import { ALCHEMY_API_KEY } from '@/constants'

const alchemy = new Alchemy({
  apiKey: ALCHEMY_API_KEY,
  network: Network.ETH_SEPOLIA,
})

export const useFetchNftsForOwner = (): {
  data: OwnedNftsResponse | undefined
  isError: boolean
  isLoading: boolean
  refetchNftsForOwner: () => void
} => {
  const { address } = useAccount()
  const {
    data: rawData,
    isError,
    isLoading,
    refetch: refetchNftsForOwner,
  } = useQuery({
    enabled: !!address,
    queryFn: () => alchemy.nft.getNftsForOwner(address as string),
    queryKey: ['getNftsByOwner'],
    refetchOnWindowFocus: false, // just to save on API calls
  })

  return {
    data: {
      ...rawData,
      // manually sort, ordering newly minted first
      ownedNfts:
        rawData?.ownedNfts?.sort((a, b) =>
          dayJs(b.mint?.timestamp ?? b.timeLastUpdated).isAfter(
            dayJs(a.mint?.timestamp ?? a.timeLastUpdated),
          )
            ? 1
            : -1,
        ) ?? [],
    } as OwnedNftsResponse,
    isError,
    isLoading,
    refetchNftsForOwner,
  }
}
