import { SendRounded } from '@mui/icons-material'
import {
  AspectRatio,
  Box,
  Card,
  Chip,
  Typography,
  Tooltip,
  IconButton,
  Modal,
  Link,
} from '@mui/joy'
import { OwnedNft } from 'alchemy-sdk'
import dayjs from 'dayjs'
import { useState } from 'react'

import TransferNftModal from '@/components/TransferNftModal'
import { SEPOLIA_TX_BASE_URL } from '@/constants'

export default function NftCard(props: OwnedNft) {
  const [isTransferModalOpen, setIsTransferModalOpen] = useState<boolean>(false)

  return (
    <Card
      sx={{
        p: 2,
        width: 300,
      }}
    >
      {/* Card Header */}
      <Box sx={{ alignItems: 'center', display: 'flex', gap: 1, justifyContent: 'space-between' }}>
        <Box>
          <Typography sx={{ fontSize: 'md', fontWeight: 'md' }}>
            {props.contract.symbol} #{props.tokenId}
          </Typography>
          <Typography
            fontSize='11px'
            component={Link}
            href={`${SEPOLIA_TX_BASE_URL}${props.mint?.transactionHash}`}
            target='_blank'
            textColor='text.tertiary'
          >
            Minted {dayjs(props.mint?.timestamp).format('MMM D YYYY h:mm A')}
          </Typography>
        </Box>

        <Tooltip title='Transfer' variant='solid'>
          <IconButton size='md' variant='plain' onClick={() => setIsTransferModalOpen(true)}>
            <SendRounded />
          </IconButton>
        </Tooltip>
      </Box>

      {/* Card Body */}
      <AspectRatio objectFit='scale-down' minHeight={275}>
        <figure>
          <img
            src={props.image.cachedUrl ?? props.image.originalUrl}
            loading='lazy'
            alt={`${props.contract.symbol} #${props.tokenId}`}
          />
        </figure>
      </AspectRatio>

      {/* Card Footer */}
      <Box sx={{ alignItems: 'flex-start', display: 'flex', flexDirection: 'column', gap: 0.5 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Typography sx={{ fontSize: 'md', fontWeight: 'md' }}>Type</Typography>
          <Typography fontSize='sm' textColor='text.tertiary'>
            {props.tokenType}
          </Typography>
        </Box>

        {props.raw?.metadata?.description && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Typography sx={{ fontSize: 'md', fontWeight: 'md' }}>Description</Typography>
            <Typography fontSize='sm' textColor='text.tertiary'>
              {props.raw.metadata.description}
            </Typography>
          </Box>
        )}

        {props.raw?.metadata?.attributes.length && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Typography sx={{ fontSize: 'md', fontWeight: 'md' }}>Traits</Typography>
            {props.raw?.metadata?.attributes.map((trait: { trait_type: string; value: string }) => {
              return (
                <Chip
                  key={trait.trait_type}
                  variant='outlined'
                  color='neutral'
                  size='sm'
                  sx={{
                    borderRadius: 'sm',
                    color: 'text.tertiary',
                    px: 0.5,
                    py: 0.25,
                  }}
                >
                  {trait.trait_type}: {trait.value}
                </Chip>
              )
            })}
          </Box>
        )}
      </Box>

      {/* Transfer Modal */}
      <Modal
        aria-labelledby={`transfer-nft-${props.tokenId}-modal`}
        aria-describedby={`transfer-nft-${props.tokenId}-modal`}
        open={isTransferModalOpen}
        onClose={() => setIsTransferModalOpen(false)}
        sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}
      >
        <TransferNftModal tokenId={props.tokenId} onClose={() => setIsTransferModalOpen(false)} />
      </Modal>
    </Card>
  )
}
