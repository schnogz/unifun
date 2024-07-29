import { useQuery } from '@tanstack/react-query'
import { NftContractNftsResponse } from 'alchemy-sdk'

import { UNI_CONTRACT_ADDRESS, ALCHEMY_API_KEY, ALCHEMY_BASE_URL } from '@/constants'

const getNftsByContract = async () => {
  const res = await fetch(
    `${ALCHEMY_BASE_URL}/nft/v3/${ALCHEMY_API_KEY}/getNFTsForContract?contractAddress=${UNI_CONTRACT_ADDRESS}&limit=10&withMetadata=true&orderBy?`,
    {
      method: 'GET',
    },
  )
  return res.json()
}

export const useFetchRecentMints = (): {
  data: NftContractNftsResponse
  isError: boolean
  isLoading: boolean
  refetchRecentMints: () => void
} => {
  const {
    data,
    isError,
    isLoading,
    refetch: refetchRecentMints,
  } = useQuery({
    queryFn: getNftsByContract,
    queryKey: ['getNftsByContract'],
    refetchOnWindowFocus: false, // just to save on API calls
  })

  return {
    data,
    isError,
    isLoading,
    refetchRecentMints,
  }
}
