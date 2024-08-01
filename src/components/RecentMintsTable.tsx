import { Typography, Table, Link } from '@mui/joy'
import { NftContractNftsResponse, Nft } from 'alchemy-sdk'
import dayjs from 'dayjs'

import { SEPOLIA_ADDRESS_BASE_URL, SEPOLIA_TX_BASE_URL } from '@/constants'
import { truncateAddress } from '@/utils/address'

export const RecentMintsTable = ({ data }: { data: NftContractNftsResponse }) => {
  return data?.nfts?.length ? (
    <Table
      size='sm'
      borderAxis='xBetween'
      sx={{
        '--TableCell-paddingX': '1rem',
        '--TableCell-paddingY': '1rem',
        borderRadius: 2,
        mb: 2,
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
        {data?.nfts?.map((nft: Nft & { to?: string; transactionHash?: string }) => {
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
                  href={`${SEPOLIA_ADDRESS_BASE_URL}${nft.mint?.mintAddress ?? nft.to}`}
                  target='_blank'
                >
                  {truncateAddress(nft.mint?.mintAddress ?? nft.to, 8)}
                </Typography>
              </td>
              <td>
                <Typography
                  level='body-sm'
                  component={Link}
                  href={`${SEPOLIA_TX_BASE_URL}${nft.mint?.transactionHash ?? nft.transactionHash}`}
                  target='_blank'
                >
                  {truncateAddress(nft?.mint?.transactionHash ?? nft.transactionHash, 8)}
                </Typography>
              </td>
              <td>
                <Typography level='body-sm'>
                  {dayjs(nft.mint?.timestamp ?? nft.timeLastUpdated).format('MMM D YYYY h:mm A')}
                </Typography>
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  ) : null
}
