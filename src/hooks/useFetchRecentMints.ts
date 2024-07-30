import { useQuery } from '@tanstack/react-query'
import { NftContractNftsResponse, Alchemy, Network, SortingOrder } from 'alchemy-sdk'

import { UNI_CONTRACT_ADDRESS, ALCHEMY_API_KEY, NULL_ADDRESS } from '@/constants'

const alchemy = new Alchemy({
  apiKey: ALCHEMY_API_KEY,
  network: Network.ETH_SEPOLIA,
})

export const useFetchRecentMints = (): {
  data: NftContractNftsResponse
  isError: boolean
  isLoading: boolean
  refetchRecentMints: () => void
} => {
  const {
    data: rawData,
    isError,
    isLoading,
    refetch: refetchRecentMints,
  } = useQuery({
    queryFn: () =>
      alchemy.nft.getTransfersForContract(UNI_CONTRACT_ADDRESS, {
        order: SortingOrder.DESCENDING,
      }),
    queryKey: ['getNftsByContract'],
    refetchOnWindowFocus: false, // just to save on API calls
  })

  return {
    data: {
      ...rawData,
      // by default this api will also include token transfers. filter to only mint transactions (i.e. from address is the null address) and then limit to first 10 entries
      nfts: rawData?.nfts?.filter((event) => event.from === NULL_ADDRESS).slice(0, 10) ?? [],
    },
    isError,
    isLoading,
    refetchRecentMints,
  }
}
