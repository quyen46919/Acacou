import { categoriesList } from '@/seedData'
import { ArrowRight } from '@mui/icons-material'
import { Button, Menu, MenuItem } from '@mui/material'
import { grey } from '@mui/material/colors'
import { MouseEvent, useState } from 'react'
interface CategoryMenuProps {
  open: boolean
  handleClick?: any
  handleClose: any
  anchorEl: any
  data: Array<any>
}

function NestedNestedMenu(props: any) {
  const { anchorEl, handleClose, open, data } = props
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      {data.map((course: any) => (
        <MenuItem key={course.id} onClick={handleClose} sx={{ minWidth: 160 }}>
          {course.name}
        </MenuItem>
      ))}
    </Menu>
  )
}

function NestedMenu(props: CategoryMenuProps) {
  const { anchorEl, handleClose, open, data } = props
  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null)
  const open2 = Boolean(anchorEl2)
  const [data2, setData2] = useState<any>()
  const handleClick2 = (event: React.MouseEvent<HTMLElement>, data: Array<any>) => {
    setAnchorEl2(event.currentTarget)
    setData2(data)
  }
  const handleClose2 = () => {
    setAnchorEl2(null)
  }
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      {data.map((course: any) => (
        <MenuItem
          key={course.id}
          onClick={(e: any) => handleClick2(e, course.child)}
          sx={{
            minWidth: 160,
            width: '100%',
            justifyContent: 'space-between',
            '& svg': { color: grey[500] },
          }}
        >
          {course.name}
          {course.child.length > 0 && <ArrowRight />}
        </MenuItem>
      ))}
      {data2 && (
        <NestedNestedMenu
          anchorEl={anchorEl2}
          open={open2}
          handleClose={handleClose2}
          data={data2}
        />
      )}
    </Menu>
  )
}

export default function CategoryMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const open2 = Boolean(anchorEl2)
  const [childData, setChildData] = useState<any>([])

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleClick2 = (event: MouseEvent<HTMLElement>, data: Array<any>) => {
    setAnchorEl2(event.currentTarget)
    setChildData(data)
  }
  const handleClose2 = () => {
    setAnchorEl2(null)
  }

  return (
    <>
      <Button onClick={handleClick}>Categories</Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {categoriesList.map((category) => (
          <MenuItem
            key={category.id}
            onClick={(e: any) => handleClick2(e, category.child)}
            sx={{
              minWidth: 160,
              width: '100%',
              justifyContent: 'space-between',
              '& svg': { color: grey[500] },
            }}
          >
            {category.name}
            {category.child.length > 0 && <ArrowRight />}
          </MenuItem>
        ))}
        <NestedMenu anchorEl={anchorEl2} open={open2} handleClose={handleClose2} data={childData} />
      </Menu>
    </>
  )
}
