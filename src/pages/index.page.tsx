import { FavoriteBorderRounded, PhotoLibraryRounded } from '@mui/icons-material'
import { Button, Box, Container, Stack, Card, Typography, CircularProgress } from '@mui/joy'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import { useReward } from 'react-rewards'

import { UnifunNft } from '@/assets/UnifunNft'
import { Alert } from '@/components/Alert'
import { RecentMintsTable } from '@/components/RecentMintsTable'
import { useFetchRecentMints } from '@/hooks/useFetchRecentMints'
import { useMintNft } from '@/hooks/useMintNft'
import { AppLayout } from '@/layouts/AppLayout'
import { NextPageWithLayout } from '@/types/layout'
import { MintStatus } from '@/types/mint'

const HomePage: NextPageWithLayout = () => {
  const router = useRouter()
  const { mintError, mintNft, mintStatus } = useMintNft()
  const {
    data: recentMints,
    isError: recentMintsError,
    isLoading: isRecentMintsLoading,
    refetchRecentMints,
  } = useFetchRecentMints()

  const initialAnimateRef = useRef<SVGAnimateElement | null>(null)
  const bounceAnimateRef = useRef<SVGAnimateElement | null>(null)

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

  useEffect(() => {
    // start mint progress SVGs
    if (mintStatus === MintStatus.PENDING_MINT) {
      if (initialAnimateRef.current) {
        initialAnimateRef.current.beginElement()
      }
      setTimeout(() => {
        if (bounceAnimateRef.current) {
          bounceAnimateRef.current.beginElement()
        }
      }, 15_000)
    }

    // hide mint progress SVGs and refetch recent mints upon new mint completion
    if (mintStatus === MintStatus.COMPLETED) {
      if (initialAnimateRef.current) {
        initialAnimateRef.current.removeAttribute('begin')
        initialAnimateRef.current.setAttribute(
          'to',
          initialAnimateRef.current.getAttribute('from') || '1060',
        )
      }
      if (bounceAnimateRef.current) {
        bounceAnimateRef.current.removeAttribute('begin')
        bounceAnimateRef.current.setAttribute(
          'values',
          bounceAnimateRef.current.getAttribute('values')?.split(';')[0] || '85',
        )
      }
      refetchRecentMints()
      showConfetti()
    }
  }, [mintStatus])

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
      }}
    >
      <Stack sx={{ alignItems: 'center', display: 'flex', gap: 2 }}>
        <Card
          className={classNames({ 'mint-complete': mintStatus === MintStatus.COMPLETED })}
          variant='plain'
          sx={{
            borderRadius: 0,
            height: '250px',
            mb: 1,
            p: 0,

            width: '250px',
            'z-index': 999,
          }}
        >
          {/*<div className='mint-overlay-container'>*/}
          <UnifunNft />
          {/*<img src={UNI_TOKEN_IMG} loading='lazy' alt='unifun nft' />*/}
          {/*<svg width='250' height='250' viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'>*/}
          {/*  <defs>*/}
          {/*    <mask id='mask'>*/}
          {/*      <rect x='0' y='0' width='250' height='250' rx='50' fill='#fff' />*/}
          {/*    </mask>*/}
          {/*  </defs>*/}
          {/*  <rect*/}
          {/*    x='0'*/}
          {/*    y='0'*/}
          {/*    width='250'*/}
          {/*    height='250'*/}
          {/*    rx='50'*/}
          {/*    fill='none'*/}
          {/*    stroke='deeppink'*/}
          {/*    strokeWidth='12'*/}
          {/*    mask='url(#mask)'*/}
          {/*    strokeDasharray='1060'*/}
          {/*    strokeDashoffset='1060'*/}
          {/*  >*/}
          {/*    /!* normal progress bar up until about 85% complete until freeze *!/*/}
          {/*    <animate*/}
          {/*      ref={initialAnimateRef}*/}
          {/*      attributeName='stroke-dashoffset'*/}
          {/*      begin='indefinite'*/}
          {/*      from='1060'*/}
          {/*      to='212'*/}
          {/*      dur='15s'*/}
          {/*      fill='freeze'*/}
          {/*    />*/}
          {/*    /!* if mint is not complete yet, animate another progress bar near that bounces near completion *!/*/}
          {/*    <animate*/}
          {/*      ref={bounceAnimateRef}*/}
          {/*      attributeName='stroke-dashoffset'*/}
          {/*      begin='indefinite'*/}
          {/*      values='212; 191; 212'*/}
          {/*      keyTimes='0; 0.25; 1'*/}
          {/*      dur='1s'*/}
          {/*      repeatCount='indefinite'*/}
          {/*    />*/}
          {/*  </rect>*/}
          {/*</svg>*/}
          {/*</div>*/}
        </Card>

        <Typography fontSize='13px' color='primary' fontWeight='bold'>
          0.XXXX SEP • XX/100 minted
        </Typography>

        <Button
          size='lg'
          loading={
            mintStatus === MintStatus.PENDING_TX_SEND || mintStatus === MintStatus.PENDING_MINT
          }
          loadingPosition='start'
          color={mintStatus === MintStatus.COMPLETED ? 'success' : 'primary'}
          onClick={() => (mintStatus === MintStatus.COMPLETED ? router.push('/myNfts') : mintNft())}
          startDecorator={
            mintStatus === MintStatus.COMPLETED ? (
              <PhotoLibraryRounded />
            ) : (
              <FavoriteBorderRounded />
            )
          }
        >
          {(mintStatus === MintStatus.NOT_STARTED || mintStatus === MintStatus.ERROR) && 'Mint'}
          {mintStatus === MintStatus.PENDING_TX_SEND && 'Pending TX'}
          {mintStatus === MintStatus.PENDING_MINT && 'Minting'}
          {mintStatus === MintStatus.COMPLETED && 'View NFT'}
        </Button>
      </Stack>

      <Box>
        <Typography fontSize='1.5rem' fontWeight='lg' sx={{ mb: 1 }}>
          Recent Mints
        </Typography>
        {(isRecentMintsLoading || recentMintsError) && (
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flex: 1,
              justifyContent: 'center',
              mt: 2,
            }}
          >
            {isRecentMintsLoading && <CircularProgress variant='soft' size='md' />}
            {recentMintsError && <Typography color='danger'>Failed to fetch data :(</Typography>}
          </Box>
        )}
        <RecentMintsTable data={recentMints} />
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
