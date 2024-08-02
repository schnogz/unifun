import { Grid, Box, CircularProgress, Typography, Button } from '@mui/joy'
import dayjs from 'dayjs'
import Link from 'next/link'

import NftCard from '@/components/NftCard'
import { useFetchNftsForOwner } from '@/hooks/useFetchNftsForOwner'
import { AppLayout } from '@/layouts/AppLayout'
import { NextPageWithLayout } from '@/types/layout'

const currentDate = new Date()

const MyNftsPage: NextPageWithLayout = () => {
  const { data, isError, isLoading } = useFetchNftsForOwner()

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
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Box sx={{ alignItems: 'flex-start', display: 'flex', flexDirection: 'column', mb: 4 }}>
          <Typography fontSize='x-large' color='primary' fontWeight='bolder'>
            You own {data?.totalCount} UNIFUN
          </Typography>
          <Typography fontSize='12px'>
            Last updated {dayjs(data?.validAt?.blockTimestamp ?? currentDate).format('h:mm:ss A')}
          </Typography>
        </Box>
        {data?.totalCount && (
          <Box>
            <Button component={Link} href='/' size='lg' color='primary'>
              Mint Again
            </Button>
          </Box>
        )}
      </Box>

      {data?.ownedNfts.length ? (
        <Grid container spacing={4} columns={12} sx={{ flexGrow: 1 }}>
          {data?.ownedNfts?.map((nft) => (
            <Grid xs={12} sm={6} md={6} lg={4} xl={3} key={nft.tokenId}>
              <NftCard {...nft} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            gap: 4,
            justifyContent: 'center',
          }}
        >
          <Typography fontSize='x-large' fontWeight='bolder'>
            Maybe you should mint one?
          </Typography>
          <Button component={Link} href='/' size='lg' color='primary'>
            Mint Now
          </Button>
        </Box>
      )}
    </Box>
  )
}

MyNftsPage.getLayout = (page) => <AppLayout>{page}</AppLayout>

export default MyNftsPage
