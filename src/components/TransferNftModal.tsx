import { yupResolver } from '@hookform/resolvers/yup'
import {
  Button,
  Sheet,
  ModalClose,
  Typography,
  Stack,
  Box,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Link,
} from '@mui/joy'
import { ElementRef, ElementType } from 'react'
import { useForm } from 'react-hook-form'
import { isAddress } from 'viem'
import * as yup from 'yup'

import { SEPOLIA_TX_BASE_URL } from '@/constants'
import { useTransferNft } from '@/hooks/useTransferNft'

type TransferFormInputs = {
  toAddress: string
}

export default function TransferNftModal({
  onClose,
  tokenId,
}: {
  tokenId: string
  onClose: () => void
}) {
  const { isError, isPending, isSuccess, transferNft, txHash } = useTransferNft()

  const { formState, handleSubmit, register } = useForm<TransferFormInputs>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: yupResolver<TransferFormInputs>(
      yup.object().shape({
        toAddress: yup
          .string()
          .required('Required field')
          .test('is-valid-address', 'Invalid address', (value) => {
            if (!value) return false
            return isAddress(value)
          }),
      }),
    ),
  })

  return (
    <Sheet
      variant='outlined'
      sx={{
        borderRadius: 'md',
        boxShadow: 'lg',
        p: 3,
        width: 500,
      }}
    >
      <ModalClose variant='plain' sx={{ m: 1 }} />
      <Typography
        component='h2'
        id='modal-title'
        level='h4'
        textColor='inherit'
        fontWeight='lg'
        mb={1}
      >
        Transfer NFT
      </Typography>
      <form onSubmit={handleSubmit(({ toAddress }) => transferNft(tokenId, toAddress))}>
        <Stack
          direction='column'
          justifyContent='flex-start'
          alignItems='flex-start'
          spacing={3}
          mt={3}
        >
          {isSuccess && (
            <>
              <Typography fontSize='1.25rem'>Transfer of #{tokenId} is in progress 🎉</Typography>
              <Box
                component='div'
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  width: '100%',
                }}
              >
                <Button
                  component={Link as ElementRef<ElementType>}
                  href={`${SEPOLIA_TX_BASE_URL}${txHash}`}
                  target='_blank'
                  data-testid='viewOnExplorerBtn'
                  variant='solid'
                  color='neutral'
                  sx={{ width: '175px' }}
                >
                  View Transaction
                </Button>
                <Button
                  data-testid='closeBtn'
                  variant='solid'
                  sx={{ width: '175px' }}
                  onClick={onClose}
                >
                  Close
                </Button>
              </Box>
            </>
          )}
          {!isSuccess && (
            <>
              <FormControl sx={{ width: '100%' }} error={!!formState.errors?.toAddress}>
                <FormLabel>Address</FormLabel>
                <Input
                  data-testid='toAddressInput'
                  fullWidth
                  placeholder={'0x0123456...'}
                  size='lg'
                  variant='outlined'
                  {...register('toAddress')}
                />
                <FormHelperText>{formState.errors?.toAddress?.message}</FormHelperText>
              </FormControl>
              {isError && (
                <Typography color='danger'>NFT transfer failed. Please try again.</Typography>
              )}
              <Button
                data-testid='submitBtn'
                disabled={!formState.isValid}
                loading={formState.isSubmitting || isPending}
                variant='solid'
                type='submit'
                sx={{ width: '100%' }}
              >
                Transfer
              </Button>
            </>
          )}
        </Stack>
      </form>
    </Sheet>
  )
}
