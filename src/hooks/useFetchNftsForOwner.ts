import { useQuery } from '@tanstack/react-query'
import { OwnedNftsResponse } from 'alchemy-sdk'
import { useAccount } from 'wagmi'

import { UNI_CONTRACT_ADDRESS, ALCHEMY_API_KEY, ALCHEMY_BASE_URL } from '@/constants'

const getNftsForOwner = async (address: string) => {
  const res = await fetch(
    `${ALCHEMY_BASE_URL}/nft/v3/${ALCHEMY_API_KEY}/getNFTsForOwner?owner=${address}&contractAddresses[]=${UNI_CONTRACT_ADDRESS}&withMetadata=true&orderBy=transferTime&pageSize=100`,
    {
      method: 'GET',
    },
  )
  return res.json()
}

export const useFetchNftsForOwner = (): {
  data: OwnedNftsResponse
  isError: boolean
  isLoading: boolean
} => {
  const { address } = useAccount()
  const { data, isError, isLoading } = useQuery({
    enabled: !!address,
    queryFn: () => getNftsForOwner(address as string),
    queryKey: ['getNftsByOwner'],
    refetchOnWindowFocus: false, // just to save on API calls
  })

  return {
    data,
    isError,
    isLoading,
  }
}
