import {
  AccountCircle,
  BusinessCenter,
  Login,
  Logout,
  School,
  Search,
  ShoppingCart,
} from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu'
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Stack,
  TextField,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { useTheme } from '@mui/system'
import { useState } from 'react'
import CategoryDropdown from '../CategoryDropdown'
import CategoryMenu from '../CategoryMenu'

type Anchor = 'top' | 'left' | 'bottom' | 'right'

export default function Header() {
  const theme = useTheme()
  const belowXl = useMediaQuery(theme.breakpoints.down('xl'))
  const belowMd = useMediaQuery(theme.breakpoints.down('md'))
  const belowSm = useMediaQuery(theme.breakpoints.down('sm'))
  const belowLg = useMediaQuery(theme.breakpoints.down('lg'))

  const [openLeftDrawer, setOpenLeftDrawer] = useState(false)
  const [openRightDrawer, setOpenRightDrawer] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const toggleDrawer =
    (open: boolean, anchor: string = 'left') =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      if (anchor === 'left') {
        setOpenLeftDrawer(open)
      } else {
        setOpenRightDrawer(open)
      }
    }

  return (
    <Stack
      flexDirection="row"
      width="100%"
      minWidth="100%"
      alignItems="center"
      justifyContent="space-between"
      height="65px"
      px={{ xs: '14px', md: '40px' }}
      borderBottom="1px solid silver"
    >
      <Stack
        direction="row"
        gap={{ xs: '20px', lg: '30px' }}
        justifyContent="space-between"
        alignItems="center"
      >
        {belowLg && (
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography width={180} fontWeight={800} fontSize={24} color="error.main">
          ACACOU 2022
        </Typography>
        {!belowLg && (
          <CategoryMenu
            handleClose={handleClose}
            handleClick={handleClick}
            anchorEl={anchorEl}
            open={open}
          />
        )}
        {!belowLg && (
          <TextField
            variant="outlined"
            placeholder="Input keyword"
            size="small"
            color="info"
            spellCheck="false"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              ),
            }}
            sx={{
              minWidth: { xs: '100%', sm: 200, md: 300, lg: 400 },
            }}
          />
        )}
      </Stack>
      {!belowMd ? (
        <Stack
          direction="row"
          gap={{ xs: '10px', md: '20px' }}
          justifyContent="space-between"
          alignItems="center"
        >
          {!belowXl ? (
            <Stack
              flexDirection="row"
              gap="10px"
              alignItems="center"
              justifyContent="center"
              pr="10px"
              borderRight="1px solid silver"
            >
              <Button>For enterpise</Button>
              <Button>Teach on OnEdu</Button>
            </Stack>
          ) : (
            <Box>
              <IconButton>
                <Tooltip title="Bussiness">
                  <BusinessCenter />
                </Tooltip>
              </IconButton>
            </Box>
          )}
          <Box>
            <IconButton>
              <Tooltip title="Cart">
                <ShoppingCart />
              </Tooltip>
            </IconButton>
          </Box>
          <Stack direction="row" gap="10px">
            <Button variant="contained" color="white">
              Login
            </Button>
            <Button variant="contained" color="error">
              Sign up
            </Button>
          </Stack>
        </Stack>
      ) : (
        <Stack flexDirection="row" gap="10px">
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <IconButton>
              <Tooltip title="Bussiness">
                <BusinessCenter />
              </Tooltip>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <IconButton>
              <Tooltip title="Cart">
                <ShoppingCart />
              </Tooltip>
            </IconButton>
          </Box>
          <Tooltip title="user">
            <IconButton onClick={toggleDrawer(true, 'right')}>
              <AccountCircle />
            </IconButton>
          </Tooltip>
        </Stack>
      )}

      <Drawer
        anchor="left"
        open={openLeftDrawer}
        onClose={toggleDrawer(false)}
        sx={{ width: '100%' }}
        disableEnforceFocus
      >
        <Box
          sx={{ width: 300 }}
          role="presentation"
          onClick={toggleDrawer(true)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            <ListItem>
              <Typography width={180} fontWeight={800} fontSize={24} color="error.main">
                ACACOU 2022
              </Typography>
            </ListItem>
            <ListItem>
              <TextField fullWidth size="small" placeholder="Input keyword" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <CategoryDropdown />
          </List>
        </Box>
      </Drawer>

      <Drawer
        anchor="right"
        open={openRightDrawer}
        onClose={toggleDrawer(false, 'right')}
        sx={{ width: '100%' }}
        disableEnforceFocus
      >
        <Box
          sx={{ width: 300 }}
          role="presentation"
          onClick={toggleDrawer(true)}
          onKeyDown={toggleDrawer(false)}
        >
          <ListItem>
            <Typography width={180} fontWeight={800} fontSize={24} color="error.main">
              ACACOU 2022
            </Typography>
          </ListItem>
          {belowMd && (
            <List>
              <ListItemButton>
                <ListItemIcon>
                  <Login />
                </ListItemIcon>
                Login
              </ListItemButton>
              <ListItemButton>
                <ListItemIcon>
                  <Logout />
                </ListItemIcon>
                Logout
              </ListItemButton>
            </List>
          )}
          <Divider />
          <List>
            <ListItemButton>
              <ListItemIcon>
                <ShoppingCart />
              </ListItemIcon>
              Cart
            </ListItemButton>
          </List>
          <Divider />
          <List>
            <ListItemButton>
              <ListItemIcon>
                <School />
              </ListItemIcon>
              Teach on Acacou
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <BusinessCenter />
              </ListItemIcon>
              For enterpise
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </Stack>
  )
}
