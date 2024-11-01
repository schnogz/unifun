import { MoreVertRounded } from '@mui/icons-material'
import {
  AspectRatio,
  Box,
  Card,
  Chip,
  Typography,
  IconButton,
  Modal,
  Link,
  Dropdown,
  MenuButton,
  Menu,
  MenuItem,
} from '@mui/joy'
import { OwnedNft } from 'alchemy-sdk'
import dayjs from 'dayjs'
import { useState } from 'react'

import TransferNftModal from '@/components/TransferNftModal'
import { SEPOLIA_TX_BASE_URL } from '@/constants'

export default function NftDisplayCard(props: OwnedNft) {
  const [isTransferModalOpen, setIsTransferModalOpen] = useState<boolean>(false)

  return (
    <Card
      sx={(theme) => ({
        backgroundColor: theme.palette.background.level1,
        p: 2,
        width: 300,
      })}
    >
      {/* Card Header */}
      <Box
        component='div'
        sx={{ alignItems: 'center', display: 'flex', gap: 1, justifyContent: 'space-between' }}
      >
        <Box component='div'>
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

        <Dropdown>
          <MenuButton slots={{ root: IconButton }} slotProps={{ root: { color: 'neutral' } }}>
            <MoreVertRounded />
          </MenuButton>
          <Menu placement='bottom-end'>
            <MenuItem onClick={() => setIsTransferModalOpen(true)}>Transfer</MenuItem>
          </Menu>
        </Dropdown>
      </Box>

      {/* Card Body */}
      <AspectRatio objectFit='scale-down' minHeight={275}>
        <figure>
          <img
            src={props.image?.cachedUrl ?? props.image?.originalUrl}
            loading='lazy'
            alt={`${props.contract?.symbol} #${props.tokenId}`}
          />
        </figure>
      </AspectRatio>

      {/* Card Footer */}
      <Box
        component='div'
        sx={{ alignItems: 'flex-start', display: 'flex', flexDirection: 'column', gap: 0.5 }}
      >
        <Box
          component='div'
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
            component='div'
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Typography sx={{ fontSize: 'md', fontWeight: 'md' }}>Description</Typography>
            <Typography fontSize='sm' textColor='text.tertiary'>
              {props.raw?.metadata?.description}
            </Typography>
          </Box>
        )}

        {props.raw?.metadata?.attributes?.length && (
          <Box
            component='div'
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
        <>
          <TransferNftModal tokenId={props.tokenId} onClose={() => setIsTransferModalOpen(false)} />
        </>
      </Modal>
    </Card>
  )
}
