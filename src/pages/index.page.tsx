import { FavoriteBorderRounded, PhotoLibraryRounded } from '@mui/icons-material'
import {
  Button,
  Box,
  Container,
  Typography,
  typographyClasses,
  Grid,
  Card,
  CardContent,
  CardOverflow,
  AspectRatio,
} from '@mui/joy'
import { useRouter } from 'next/router'

import { Alert } from '@/components/Alert'
import RecentMintsTable from '@/components/RecentMintsTable'
import { UNI_TOKEN_IMG } from '@/constants'
import { useMintNft } from '@/hooks/useMintNft'
import { AppLayout } from '@/layouts/AppLayout'
import { NextPageWithLayout } from '@/types/layout'
import { MintStatus } from '@/types/mint'

const HomePage: NextPageWithLayout = () => {
  const router = useRouter()
  const { mintError, mintNft, mintStatus } = useMintNft()

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
      }}
    >
      <Box
        sx={(theme) => ({
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          flexShrink: 999,
          gap: '1rem',
          textAlign: 'center',
          [theme.breakpoints.up(834)]: {
            alignItems: 'flex-start',
            minWidth: 420,
            textAlign: 'initial',
          },
          [`& .${typographyClasses.root}`]: {
            textWrap: 'balance',
          },
        })}
      >
        <Grid
          container
          spacing={1}
          sx={{ alignItems: 'center', display: 'flex', flexGrow: 1, justifyContent: 'center' }}
        >
          <Grid xs={6}>
            <Typography color='primary' fontSize='lg' fontWeight='lg'>
              It&apos;s going up forever, Laura.
            </Typography>
            <Typography level='h1' fontWeight='xl' fontSize='3rem'>
              Satoshi&apos;s favorite NFT collection is UniFun 🎉
            </Typography>
            <Typography fontSize='xs' textColor='gray' lineHeight='lg'>
              The above statements were forged by Craig Wright
            </Typography>
          </Grid>

          <Grid xs={6} sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
            <Card variant='outlined' sx={{ width: '360px' }}>
              <CardOverflow>
                <AspectRatio objectFit='scale-down' minHeight={225}>
                  <img src={UNI_TOKEN_IMG} loading='lazy' alt='' />
                </AspectRatio>
              </CardOverflow>
              <CardContent>
                <Button
                  size='lg'
                  loading={
                    mintStatus === MintStatus.PENDING_TX_SEND ||
                    mintStatus === MintStatus.PENDING_MINT
                  }
                  loadingPosition='start'
                  color={mintStatus === MintStatus.COMPLETED ? 'success' : 'primary'}
                  onClick={() =>
                    mintStatus === MintStatus.COMPLETED ? router.push('/myNfts') : mintNft()
                  }
                  startDecorator={
                    mintStatus === MintStatus.COMPLETED ? (
                      <PhotoLibraryRounded />
                    ) : (
                      <FavoriteBorderRounded />
                    )
                  }
                >
                  {(mintStatus === MintStatus.NOT_STARTED || mintStatus === MintStatus.ERROR) &&
                    'Mint Now'}
                  {mintStatus === MintStatus.PENDING_TX_SEND && 'Pending TX'}
                  {mintStatus === MintStatus.PENDING_MINT && 'Minting'}
                  {mintStatus === MintStatus.COMPLETED && 'View NFT'}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Typography fontSize='1.5rem' fontWeight='lg' sx={{ mb: 1 }}>
          Recently Minted
        </Typography>
        <RecentMintsTable />
      </Box>

      {/* following components are absolutely positioned 🤷‍ */}
      <Box
        sx={{
          left: '50%',
          position: 'fixed',
          top: '25%',
        }}
      >
        <span id='newMintConfetti' />
      </Box>

      {mintStatus === MintStatus.ERROR && (
        <Alert type='error' title='Failed to mint NFT' message={mintError as string} />
      )}
    </Container>
  )
}

HomePage.getLayout = (page) => <AppLayout>{page}</AppLayout>

export default HomePage
