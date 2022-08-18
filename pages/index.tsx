import dynamic from 'next/dynamic'
const CourseCard = dynamic(() => import('@/components/CourseCard'), { ssr: false })
import Header from '@/components/Header'
import { NextPageWithLayout } from '@/models/common'
import { courseCard, homepageContent, programmingLanguages } from '@/seedData'
import { Search } from '@mui/icons-material'
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
} from '@mui/material'
import defaultImage from 'public/images/banner.jpg'
import { useState } from 'react'
import Image from 'next/image'
import SlickSlider from '@/components/SlickSlider'
import Footer from '@/components/Footer'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: '16px 0' }}>{children}</Box>}
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const Home: NextPageWithLayout = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Box>
      <Header />
      <Stack
        justifyContent="center"
        sx={{
          width: '100%',
          height: 450,
          backgroundImage: `url('${defaultImage.src}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <Stack
          width={{ xs: '100%', sm: 400, lg: 500 }}
          gap="10px"
          p={{ xs: '20px', md: '0px 0px 0px 100px' }}
        >
          <Typography fontSize={40} lineHeight={1.3} fontWeight={700} color="white.main">
            Study every time and everywhere
          </Typography>
          <Typography color="white.main" fontSize={18} lineHeight={1.5}>
            Share useful knowledge for everyone
          </Typography>
          <TextField
            variant="outlined"
            color="info"
            spellCheck="false"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Search color="error" />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Stack>

      {/* TABS */}
      <Box sx={{ width: '100%', p: { xs: '0 20px', sm: '0 40px' } }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} indicatorColor="secondary">
            <Tab label="Business" {...a11yProps(0)} />
            <Tab label="Design" {...a11yProps(1)} />
            <Tab label="Photographie" {...a11yProps(2)} />
            <Tab label="Development" {...a11yProps(3)} />
            <Tab label="Marketing" {...a11yProps(4)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <SlickSlider />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SlickSlider />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <SlickSlider />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <SlickSlider />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <SlickSlider />
        </TabPanel>
      </Box>

      {/* CONTENT */}
      <Grid
        container
        spacing={3}
        sx={{
          width: '100%',
          height: 'fit-content',
          p: { xs: '30px 10px', md: '40px 60px', lg: '40px 100px' },
          m: '20px 0',
          bgcolor: 'greyDefault.main',
          display: 'flex',
        }}
      >
        {homepageContent.map((row) => (
          <Grid key={row.id} item xs={12} sm={6} md={4} lg={4} xl={4}>
            <Box
              sx={{
                height: '100%',
                bgcolor: 'white.main',
                p: '30px 20px',
                boxSizing: 'border-box',
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
                border: '1px solid #e8e9eb',
              }}
            >
              <Box minWidth={40}>
                <Image src={row.icon} alt="logo" />
              </Box>
              <Stack gap="10px">
                <Typography fontSize={18} fontWeight={700}>
                  {row.title}
                </Typography>
                <Typography fontSize={16}>{row.content}</Typography>
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* SLIDE */}
      <Box mb="40px">
        <Typography fontSize={24} px="40px">
          Les participants consultent
        </Typography>
        <SlickSlider />
      </Box>
      <Box mb="40px">
        <Typography fontSize={24} px="40px">
          Les participants consultent
        </Typography>
        <SlickSlider />
      </Box>

      {/* RECOMMEND */}
      <Box mb="40px">
        <Typography fontSize={24} px="40px">
          Topics recommended for you
        </Typography>
        <Grid container spacing={1} width="100%" p={{ xs: '20px', sm: '20px 40px' }} m={0}>
          {programmingLanguages.map((language) => (
            <Grid item key={language.id} xs={6} sm={4} md={3} lg={3} xl={2}>
              <Button
                variant="outlined"
                sx={{
                  width: '100%',
                  height: 60,
                }}
              >
                {language.name}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* SLIDE */}
      <Box mb="40px">
        <Typography fontSize={24} px="40px">
          Les participants consultent
        </Typography>
        <SlickSlider />
      </Box>
      <Box mb="40px">
        <Typography fontSize={24} px="40px">
          Les participants consultent
        </Typography>
        <SlickSlider />
      </Box>

      <Footer />
    </Box>
  )
}

export default Home
