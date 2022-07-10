import {
  AccountCircle,
  BusinessCenter,
  Inbox,
  Login,
  Logout,
  Mail,
  Search,
  ShoppingCart,
} from '@mui/icons-material'
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
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  TextField,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { useTheme } from '@mui/system'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'

type Anchor = 'top' | 'left' | 'bottom' | 'right'

export default function Header() {
  const theme = useTheme()
  const belowXl = useMediaQuery(theme.breakpoints.down('xl'))
  const belowMd = useMediaQuery(theme.breakpoints.down('md'))
  const belowSm = useMediaQuery(theme.breakpoints.down('sm'))

  const [openDrawer, setOpenDrawer] = useState(false)

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setOpenDrawer(open)
    }

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <Typography width={180} fontWeight={800} fontSize={24} color="error.main">
            ACACOU 2022
          </Typography>
        </ListItem>
        <ListItem>
          <TextField size="small" placeholder="Input keyword" />
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Login />
            </ListItemIcon>
            <ListItemText primary="Login" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Signup" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        {['For Enterpise', 'Teach on OnEdu', 'Your cart'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
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
        {belowXl && (
          <IconButton onClick={toggleDrawer('left', true)}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography width={180} fontWeight={800} fontSize={24} color="error.main">
          ACACOU 2022
        </Typography>
        {!belowXl && <Typography color="secondary.main">Categories</Typography>}
        {!belowXl && (
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
            <IconButton onClick={toggleDrawer('left', true)}>
              <AccountCircle />
            </IconButton>
          </Tooltip>
        </Stack>
      )}
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={toggleDrawer('left', false)}
        sx={{ width: '100%' }}
      >
        {list('left')}
      </Drawer>
    </Stack>
  )
}
