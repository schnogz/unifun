import { Box, Typography, Table, Link, CircularProgress } from '@mui/joy'
import dayjs from 'dayjs'

import { SEPOLIA_ADDRESS_BASE_URL, SEPOLIA_TX_BASE_URL } from '@/constants'
import { useFetchRecentMints } from '@/hooks/useFetchRecentMints'
import { truncateAddress } from '@/utils/address'

export default function RecentMintsTable() {
  const { data, isError, isLoading } = useFetchRecentMints()

  if (isLoading || isError) {
    return (
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          mt: 2,
        }}
      >
        {isLoading && <CircularProgress variant='soft' size='md' />}
        {isError && <Typography color='danger'>Failed to fetch data :(</Typography>}
      </Box>
    )
  }

  return (
    <Table
      size='sm'
      borderAxis='xBetween'
      variant='outlined'
      sx={{
        '--TableCell-paddingX': '1rem',
        '--TableCell-paddingY': '1rem',
        borderRadius: 2,
      }}
    >
      <thead>
        <tr>
          <th>
            <Typography level='title-sm' fontWeight='bolder'>
              Token ID
            </Typography>
          </th>
          <th>
            <Typography level='title-sm' fontWeight='bolder'>
              Owner
            </Typography>
          </th>
          <th>
            <Typography level='title-sm' fontWeight='bolder'>
              Transaction
            </Typography>
          </th>
          <th>
            <Typography level='title-sm' fontWeight='bolder'>
              Mint Time
            </Typography>
          </th>
        </tr>
      </thead>
      <tbody>
        {data?.nfts?.map((nft) => {
          return (
            <tr key={nft.tokenId}>
              <td>
                <Typography level='title-sm' sx={{ alignItems: 'flex-start' }}>
                  #{nft.tokenId}
                </Typography>
              </td>
              <td>
                <Typography
                  level='body-sm'
                  component={Link}
                  href={`${SEPOLIA_ADDRESS_BASE_URL}${nft.mint?.mintAddress}`}
                  target='_blank'
                >
                  {nft.mint?.mintAddress ? truncateAddress(nft.mint?.mintAddress, 8) : 'N/A'}
                </Typography>
              </td>
              <td>
                <Typography
                  level='body-sm'
                  component={Link}
                  href={`${SEPOLIA_TX_BASE_URL}${nft.mint?.transactionHash}`}
                  target='_blank'
                >
                  {nft.mint?.transactionHash
                    ? truncateAddress(nft.mint?.transactionHash, 8)
                    : 'N/A'}
                </Typography>
              </td>
              <td>
                <Typography level='body-sm'>
                  {nft.mint?.timestamp
                    ? dayjs(nft.mint?.timestamp).format('MMM D YYYY h:mm A')
                    : 'N/A'}
                </Typography>
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}
