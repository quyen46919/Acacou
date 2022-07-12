import { categoriesList } from '@/seedData'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { Box, IconButton, ListItemIcon } from '@mui/material'
import Collapse from '@mui/material/Collapse'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import { useState } from 'react'
import CodeIcon from '@mui/icons-material/Code'
import GestureIcon from '@mui/icons-material/Gesture'
import DomainVerificationIcon from '@mui/icons-material/DomainVerification'

function showIcon(id: number) {
  switch (id) {
    case 1:
      return <CodeIcon />
    case 2:
      return <GestureIcon />
    default:
      return <DomainVerificationIcon />
  }
}

export default function Category(props: any) {
  const { isPopup = false } = props
  const [open, setOpen] = useState<String>('')
  const [open2, setOpen2] = useState<String>('')
  const [open3, setOpen3] = useState<String>('')

  const handlOpenChange = (name: String) => {
    if (open === name) {
      setOpen('')
    } else {
      setOpen(name)
    }
  }

  const handleOpen2Change = (name: String) => {
    if (open2 === name) {
      setOpen2('')
    } else {
      setOpen2(name)
    }
  }

  const handleOpen3Change = (name: String) => {
    if (open3 === name) {
      setOpen3('')
    } else {
      setOpen3(name)
    }
  }

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Categories
        </ListSubheader>
      }
    >
      {!isPopup
        ? categoriesList.map((category) => (
            <Box key={category.id}>
              <ListItemButton onClick={() => handlOpenChange(category.name)}>
                <ListItemIcon>{showIcon(category.id)}</ListItemIcon>
                <ListItemText primary={category.name} />
                {open === category.name ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open === category.name} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {category.child.map((part) => (
                    <Box key={part.id}>
                      <ListItemButton sx={{ pl: 3 }} onClick={() => handleOpen2Change(part.name)}>
                        <ListItemText primary={part.name} />
                        {open2 === part.name ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse in={open2 === part.name} timeout="auto" unmountOnExit>
                        {part.child.map((course) => (
                          <Box key={course.id}>
                            <ListItemButton
                              sx={{ pl: 6 }}
                              onClick={() => handleOpen3Change(course.name)}
                            >
                              <ListItemText primary={course.name} />
                              {course.child &&
                                course.child.length > 0 &&
                                (open3 === course.name ? <ExpandLess /> : <ExpandMore />)}
                            </ListItemButton>
                            <Collapse in={open3 === course.name} timeout="auto" unmountOnExit>
                              {course.child?.map((lession) => (
                                <ListItemButton sx={{ pl: 9 }} key={lession?.id}>
                                  <ListItemText primary={lession.name} />
                                </ListItemButton>
                              ))}
                            </Collapse>
                          </Box>
                        ))}
                      </Collapse>
                    </Box>
                  ))}
                </List>
              </Collapse>
            </Box>
          ))
        : categoriesList.map((category) => (
            <Box key={category.id}>
              <ListItemButton onClick={() => handlOpenChange(category.name)}>
                <ListItemIcon>{showIcon(category.id)}</ListItemIcon>
                <ListItemText primary={category.name} />
              </ListItemButton>
              <Collapse in={open === category.name} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {category.child.map((part) => (
                    <Box key={part.id}>
                      <ListItemButton sx={{ pl: 3 }} onClick={() => handleOpen2Change(part.name)}>
                        <ListItemText primary={part.name} />
                      </ListItemButton>
                      <Collapse in={open2 === part.name} timeout="auto" unmountOnExit>
                        {part.child.map((course) => (
                          <Box key={course.id}>
                            <ListItemButton
                              sx={{ pl: 6 }}
                              onClick={() => handleOpen3Change(course.name)}
                            >
                              <ListItemText primary={course.name} />
                            </ListItemButton>
                            <Collapse in={open3 === course.name} timeout="auto" unmountOnExit>
                              {course.child?.map((lession) => (
                                <ListItemButton sx={{ pl: 9 }} key={lession?.id}>
                                  <ListItemText primary={lession.name} />
                                </ListItemButton>
                              ))}
                            </Collapse>
                          </Box>
                        ))}
                      </Collapse>
                    </Box>
                  ))}
                </List>
              </Collapse>
            </Box>
          ))}
    </List>
  )
}
