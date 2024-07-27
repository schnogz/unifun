import {
  CollectionsRounded,
  HomeRounded,
  TravelExploreRounded,
  LogoutRounded,
} from '@mui/icons-material'
import {
  Avatar,
  Box,
  Divider,
  GlobalStyles,
  IconButton,
  Sheet,
  Typography,
  ListItemContent,
  ListItemButton,
  listItemButtonClasses,
  ListItem,
  List,
} from '@mui/joy'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { closeSidebar } from '@/utils/sidebar'

export default function Sidebar() {
  const { pathname: currentPathname } = useRouter()

  return (
    <Sheet
      className='Sidebar'
      sx={{
        // borderColor: 'divider',
        // borderRight: '1px solid',
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
            '--Sidebar-width': '275px',
            [theme.breakpoints.up('lg')]: {
              '--Sidebar-width': '275px',
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
      <Divider />
      <Box sx={{ alignItems: 'center', display: 'flex', gap: 1 }}>
        <Avatar
          variant='outlined'
          size='sm'
          src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286'
        />
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography level='title-sm'>Wallet</Typography>
          <Typography level='body-xs'>0x123asdb</Typography>
        </Box>
        <IconButton size='sm' variant='plain' color='neutral'>
          <LogoutRounded />
        </IconButton>
      </Box>
    </Sheet>
  )
}
