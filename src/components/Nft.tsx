import { LocalFireDepartmentRounded, SendRounded } from '@mui/icons-material'
import { AspectRatio, Box, Card, CardCover, Chip, IconButton, Link, Typography } from '@mui/joy'

export type NftProps = {
  amount: string
  block_number: string
  block_number_minted: string
  collection_banner_image: string
  collection_logo: string
  contract_type: string
  last_metadata_sync: string
  last_token_uri_sync: string
  metadata: string
  minter_address: string
  name: string
  owner_of: string
  possible_spam: boolean
  symbol: string
  token_address: string
  token_hash: string
  token_id: string
  token_uri: string
  verified_collection: boolean
}

export default function Nft(props: NftProps) {
  const metadata = JSON.parse(props.metadata) as {
    attributes: Array<string>
    description: string
    image: string
    name: string
  }

  return (
    <Card
      variant='plain'
      sx={{
        p: 2,
        width: 300,
      }}
    >
      <Box sx={{ alignItems: 'center', display: 'flex', gap: 1, justifyContent: 'space-between' }}>
        <Typography sx={{ fontSize: 'sm', fontWeight: 'md' }}>
          {props.name} #{props.token_id}
        </Typography>
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
          {props.contract_type}
        </Chip>
        {/*<Link*/}
        {/*  href='#dribbble-shot'*/}
        {/*  level='body-xs'*/}
        {/*  underline='none'*/}
        {/*  startDecorator={<FavoriteRounded />}*/}
        {/*  sx={{*/}
        {/*    '&:hover': { color: 'danger.plainColor' },*/}
        {/*    color: 'text.secondary',*/}
        {/*    fontWeight: 'md',*/}
        {/*    ml: 'auto',*/}
        {/*  }}*/}
        {/*>*/}
        {/*  117*/}
        {/*</Link>*/}
        {/*<Link*/}
        {/*  href='#dribbble-shot'*/}
        {/*  level='body-xs'*/}
        {/*  underline='none'*/}
        {/*  startDecorator={<VisibilityRounded />}*/}
        {/*  sx={{*/}
        {/*    '&:hover': { color: 'primary.plainColor' },*/}
        {/*    color: 'text.secondary',*/}
        {/*    fontWeight: 'md',*/}
        {/*  }}*/}
        {/*>*/}
        {/*  10.4k*/}
        {/*</Link>*/}
      </Box>
      <Box sx={{ position: 'relative' }}>
        <AspectRatio objectFit='scale-down' minHeight={275}>
          <figure>
            <img src={metadata.image} loading='lazy' alt={`${props.symbol} #${props.token_id}`} />
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
                p: 2,
              }}
            >
              <Typography level='h2' noWrap sx={{ fontSize: 'lg' }}>
                <Link
                  href='#dribbble-shot'
                  overlay
                  underline='none'
                  sx={{
                    color: '#fff',
                    display: 'block',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  #{props.token_id}
                </Link>
              </Typography>
              <IconButton
                size='sm'
                variant='solid'
                color='danger'
                sx={{ backgroundColor: 'rgba(0 0 0 / 0.2)', ml: 'auto' }}
              >
                <LocalFireDepartmentRounded />
              </IconButton>
              <IconButton size='sm' variant='solid' sx={{ backgroundColor: 'rgba(0 0 0 / 0.2)' }}>
                <SendRounded />
              </IconButton>
            </Box>
          </div>
        </CardCover>
      </Box>
    </Card>
  )
}
