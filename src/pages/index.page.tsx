import { FavoriteBorderRounded, PhotoLibraryRounded } from '@mui/icons-material'
import { Button, Box, Container, Stack, Typography, CircularProgress } from '@mui/joy'
import bigNumber from 'bignumber.js'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState, ElementRef, ElementType } from 'react'
import { useReward } from 'react-rewards'
import { useAccount, useBalance } from 'wagmi'
import { sepolia } from 'wagmi/chains'

import { Alert } from '@/components/Alert'
import NftMintCard from '@/components/NftMintCard'
import { RecentMintsTable } from '@/components/RecentMintsTable'
import { useEstimateMintFee } from '@/hooks/useEstimateMintFee'
import { useFetchNftsForOwner } from '@/hooks/useFetchNftsForOwner'
import { useFetchRecentMints } from '@/hooks/useFetchRecentMints'
import { useMintNft } from '@/hooks/useMintNft'
import { AppLayout } from '@/layouts/AppLayout'
import { NextPageWithLayout } from '@/types/layout'
import { MintStatus } from '@/types/mint'

const HomePage: NextPageWithLayout = () => {
  const router = useRouter()
  const { mintError, mintNft, mintStatus } = useMintNft()
  const { address, chainId } = useAccount()
  const { data: balance } = useBalance({
    address,
    chainId: sepolia.id,
  })
  const [mintCount, setMintCount] = useState<number>(0)
  const { data: nftOwnerData, refetchNftsForOwner } = useFetchNftsForOwner()
  const { estimatedMintFee } = useEstimateMintFee()
  const {
    data: recentMints,
    isError: recentMintsError,
    isLoading: isRecentMintsLoading,
    refetchRecentMints,
  } = useFetchRecentMints()

  const hasInsufficientBalance =
    balance && estimatedMintFee
      ? new bigNumber(balance?.formatted).isLessThanOrEqualTo(new bigNumber(estimatedMintFee))
      : false
  const isNftOwnedLimitReached = (nftOwnerData?.totalCount ?? 0) >= 100
  const isMintDisabled =
    !address || chainId !== sepolia.id || isNftOwnedLimitReached || hasInsufficientBalance

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
    // refetch data upon new mint completion
    if (mintStatus === MintStatus.COMPLETED) {
      refetchRecentMints()
      refetchNftsForOwner()
      showConfetti()
      setMintCount(mintCount + 1)
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
        <NftMintCard mintStatus={mintStatus} />

        {mintStatus !== MintStatus.PENDING_TX_SEND && mintStatus !== MintStatus.PENDING_MINT && (
          <>
            <Box sx={{ display: 'flex', flexDirection: 'row' }} component='div'>
              <Typography fontSize='13px' color='primary' fontWeight='bold'>
                {estimatedMintFee?.substring(0, 10)} ETH •
              </Typography>
              &nbsp;
              <Typography
                component={Link as ElementRef<ElementType>}
                href='/collection'
                fontSize='13px'
                color='primary'
                fontWeight='bold'
                sx={{ textDecoration: 'none' }}
              >
                {address && nftOwnerData?.totalCount ? nftOwnerData?.totalCount : '0'}
                /100 minted
              </Typography>
            </Box>

            {isNftOwnedLimitReached && (
              <Typography level='body-sm' lineHeight='1.5rem' textAlign='center'>
                You have reached the maximum amount of NFTs owned. <br />
                Thanks for supporting us! ❤️
              </Typography>
            )}

            {hasInsufficientBalance && (
              <Typography level='body-sm' lineHeight='1.5rem' textAlign='center' color='danger'>
                This account does not have enough ETH to mint
              </Typography>
            )}

            <Box component='div'>
              <Button
                size='lg'
                disabled={isMintDisabled}
                loadingPosition='start'
                color={'primary'}
                onClick={() => mintNft()}
                endDecorator={<FavoriteBorderRounded />}
              >
                {mintCount === 0 ? 'Mint' : 'Mint Again'}
              </Button>
              {mintCount > 0 && (
                <Button
                  size='lg'
                  disabled={isMintDisabled}
                  loadingPosition='start'
                  color={'success'}
                  onClick={() => router.push('/collection')}
                  endDecorator={<PhotoLibraryRounded />}
                  sx={{ ml: 2 }}
                >
                  View NFTs
                </Button>
              )}
            </Box>
          </>
        )}
        {mintStatus === MintStatus.PENDING_TX_SEND && (
          <Typography level='body-sm' className='pulsate-text'>
            Waiting for transaction…
          </Typography>
        )}
        {mintStatus === MintStatus.PENDING_MINT && (
          <Typography level='body-sm' className='pulsate-text'>
            Minting NFT…
          </Typography>
        )}
      </Stack>

      <Box component='div'>
        <Typography fontSize='1.5rem' fontWeight='lg' sx={{ mb: 1 }}>
          Recent Mints
        </Typography>
        {(isRecentMintsLoading || recentMintsError) && (
          <Box
            component='div'
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
        component='div'
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
