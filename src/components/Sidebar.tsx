import {
  CollectionsRounded,
  HomeRounded,
  TravelExploreRounded,
  PowerSettingsNewRounded,
} from '@mui/icons-material'
import {
  Avatar,
  Box,
  GlobalStyles,
  Sheet,
  Typography,
  ListItemContent,
  ListItemButton,
  listItemButtonClasses,
  ListItem,
  IconButton,
  List,
} from '@mui/joy'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { normalize } from 'viem/ens'
import { useAccount, useBalance, useEnsName, useEnsAvatar, useDisconnect } from 'wagmi'
import { mainnet } from 'wagmi/chains'

import { truncateAddress } from '@/utils/address'
import { closeSidebar } from '@/utils/sidebar'

export default function Sidebar() {
  const { pathname: currentPathname } = useRouter()
  const { address } = useAccount()
  const { disconnect } = useDisconnect()

  const { data: balanceData } = useBalance({
    address,
  })
  const { data: ensName } = useEnsName({
    address: address,
    chainId: mainnet.id,
  })
  const { data: ensAvatar } = useEnsAvatar({
    name: normalize(ensName ?? ''),
  })

  return (
    <Sheet
      className='Sidebar'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
        gap: 2,
        height: '100dvh',
        p: 3,
        position: { md: 'sticky', xs: 'fixed' },
        top: 0,
        transform: {
          md: 'none',
          xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
        },
        transition: 'transform 0.4s, width 0.4s',
        width: 'var(--Sidebar-width)',
        zIndex: 10000,
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ':root': {
            '--Sidebar-width': '250px',
            [theme.breakpoints.up('lg')]: {
              '--Sidebar-width': '250px',
            },
          },
        })}
      />
      <Box
        className='Sidebar-overlay'
        sx={{
          backgroundColor: 'var(--joy-palette-background-backdrop)',
          height: '100vh',
          left: 0,
          opacity: 'var(--SideNavigation-slideIn)',
          position: 'fixed',
          top: 0,
          transform: {
            lg: 'translateX(-100%)',
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
          },
          transition: 'opacity 0.4s',
          width: '100vw',
          zIndex: 9998,
        }}
        onClick={() => closeSidebar()}
      />
      <Box sx={{ alignItems: 'center', display: 'flex', gap: 1 }}>
        <Typography level='title-lg'>🎉&nbsp;&nbsp;UniFun App</Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          minHeight: 0,
          overflow: 'hidden auto',
          [`& .${listItemButtonClasses.root}`]: {
            gap: 1.5,
          },
        }}
      >
        <List
          size='sm'
          sx={{
            '--List-nestedInsetStart': '30px',
            '--ListItem-radius': (theme) => theme.vars.radius.sm,
            gap: 1,
          }}
        >
          <ListItem>
            <ListItemButton selected={currentPathname === '/'} component={Link} href='/'>
              <HomeRounded />
              <ListItemContent>
                <Typography level='title-sm'>Home</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
              selected={currentPathname === '/myNfts'}
              component={Link}
              href='/myNfts'
            >
              <CollectionsRounded />
              <ListItemContent>
                <Typography level='title-sm'>My NFTs</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
              selected={currentPathname === '/explore'}
              component={Link}
              href='/explore'
            >
              <TravelExploreRounded />
              <ListItemContent>
                <Typography level='title-sm'>Explore</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>

      <Box sx={{ alignItems: 'center', display: 'flex', gap: 1 }}>
        {ensAvatar && (
          <Avatar
            alt={`${ensName} avatar`}
            variant='outlined'
            size='md'
            src={ensAvatar as string}
          />
        )}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography level='title-sm'>{ensName ?? truncateAddress(address)}</Typography>
          <Typography level='body-xs'>
            {balanceData?.formatted} {balanceData?.symbol}
          </Typography>
        </Box>
        <IconButton size='md' color='danger' variant='solid' onClick={() => disconnect()}>
          <PowerSettingsNewRounded />
        </IconButton>
      </Box>
    </Sheet>
  )
}
