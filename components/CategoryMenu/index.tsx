import { categoriesList } from '@/seedData'
import { Box, Button, List, ListItemButton, ListItemIcon, Menu } from '@mui/material'
import Category from '../Category'

interface CategoryMenuProps {
  open: boolean
  handleClick: any
  handleClose: any
  anchorEl: any
}

export default function CategoryMenu(props: CategoryMenuProps) {
  const { open, handleClick, anchorEl, handleClose } = props
  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        onMouseEnter={handleClick}
        // onMouseLeave={handleClose}
      >
        Categories
      </Button>
      <Menu
        keepMounted
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            overflow: 'visible',
            mt: 0.6,
            '& .MuiAvatar-root': {
              zIndex: 1,
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
          },
        }}
      >
        <Category isPopup={true} />
      </Menu>
    </Box>
  )
}
