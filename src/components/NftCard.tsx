import { LocalFireDepartmentRounded, SendRounded } from '@mui/icons-material'
import { AspectRatio, Box, Card, CardCover, Chip, Button, Typography } from '@mui/joy'

// export type NftCardProps = {
//   amount: string
//   block_number: string
//   block_number_minted: string
//   collection_banner_image: string
//   collection_logo: string
//   contract_type: string
//   last_metadata_sync: string
//   last_token_uri_sync: string
//   metadata: string
//   minter_address: string
//   name: string
//   owner_of: string
//   possible_spam: boolean
//   symbol: string
//   token_address: string
//   token_hash: string
//   token_id: string
//   token_uri: string
//   verified_collection: boolean
// }

export default function NftCard() {
  // const metadata = JSON.parse(props.metadata) as {
  //   attributes: Array<{ trait_type: string; value: string }>
  //   description: string
  //   image: string
  //   name: string
  // }

  const onBurnNft = () => window.alert('burn')
  const onTransferNft = () => window.alert('transfer')

  return (
    <Card
      sx={{
        p: 2,
        width: 300,
      }}
    >
      {/* Card Header */}
      <Box sx={{ alignItems: 'center', display: 'flex', gap: 1, justifyContent: 'space-between' }}>
        <Typography sx={{ fontSize: 'md', fontWeight: 'md' }}>UNIFUN #666</Typography>
        <Chip
          variant='outlined'
          color='neutral'
          size='sm'
          sx={{
            borderRadius: 'sm',
            px: 0.5,
            py: 0.25,
          }}
        >
          E5555
        </Chip>
      </Box>

      {/* Card Body & Overlay */}
      <Box sx={{ position: 'relative' }}>
        <AspectRatio objectFit='scale-down' minHeight={275}>
          <figure>
            <img
              src='https://ipfs.io/ipfs/QmdVHTDaxXEdDYr5aUCLJaQNY37qyajFAXrJFFTEpLuzvz'
              //src="{metadata.image}"
              loading='lazy'
              // alt={`${props.symbol} #${props.token_id}`}
              alt='iom'
            />
          </figure>
        </AspectRatio>
        <CardCover
          className='gradient-cover'
          sx={{
            '&:hover, &:focus-within': {
              opacity: 1,
            },
            background:
              'linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)',
            opacity: 0,
            transition: '0.1s ease-in',
          }}
        >
          {/* The first box acts as a container that inherits style from the CardCover */}
          <div>
            <Box
              sx={{
                alignItems: 'center',
                alignSelf: 'flex-end',
                display: 'flex',
                flexGrow: 1,
                gap: 1.5,
                justifyContent: 'space-evenly',
                p: 2,
              }}
            >
              <Button startDecorator={<LocalFireDepartmentRounded />} onClick={onBurnNft}>
                Burn
              </Button>
              <Button startDecorator={<SendRounded />} onClick={onTransferNft}>
                Transfer
              </Button>
            </Box>
          </div>
        </CardCover>
      </Box>

      {/* Card Footer */}
      <Box sx={{ alignItems: 'flex-start', display: 'flex', flexDirection: 'column' }}>
        <Box>
          <Typography sx={{ fontSize: 'md', fontWeight: 'md' }}>Description</Typography>
          <Chip
            variant='outlined'
            color='neutral'
            size='sm'
            sx={{
              borderRadius: 'sm',
              px: 0.5,
              py: 0.25,
            }}
          >
            description goes here
          </Chip>
        </Box>
        <Box>
          <Typography sx={{ fontSize: 'md', fontWeight: 'md' }}>Traits:</Typography>
          <Chip
            variant='outlined'
            color='neutral'
            size='sm'
            sx={{
              borderRadius: 'sm',
              px: 0.5,
              py: 0.25,
            }}
          >
            IsFun: Yes
          </Chip>
        </Box>
      </Box>
    </Card>
  )
}
