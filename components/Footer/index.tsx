import {
  Divider,
  Grid,
  MenuItem,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import logo from 'public/images/adidas-logo.svg'
import logo1 from 'public/images/booking-logo.svg'
import logo2 from 'public/images/eventbrite-logo.svg'
import logo3 from 'public/images/mercedes-logo.svg'
import { grey } from '@mui/material/colors'

export default function Footer() {
  const [language, setLanguage] = useState('vietnamese')

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string)
  }

  return (
    <Stack bgcolor="black.main" divider={<Divider sx={{ bgcolor: grey[800] }} />}>
      <Stack
        flexDirection={{ xs: 'column', sm: 'row' }}
        gap={{ xs: '20px', sm: '0px' }}
        p="30px 50px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography color="white.main">
          Top companies choose Acacou Business to build in-demand career skills.
        </Typography>
        <Stack flexDirection="row" gap="20px">
          <Image src={logo} width={80} height={30} alt="logo" />
          <Image src={logo1} width={140} height={30} alt="logo" />
          <Image src={logo2} width={120} height={30} alt="logo" />
          <Image src={logo3} width={140} height={30} alt="logo" />
        </Stack>
      </Stack>
      <Stack flexDirection="row" p="60px 50px">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <Typography color="white.main" textTransform="uppercase">
              Kết nối với Acacou
            </Typography>
            <Typography color={grey[400]} fontSize={16}>
              Hotline
            </Typography>
            <Typography color="white.main">1900.500.200</Typography>
            <Typography color={grey[400]} fontSize={16}>
              Email
            </Typography>
            <Typography color="white.main">hotro@acacou.gmail.com</Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <Typography color="white.main" textTransform="uppercase">
              Thông tin về Acacou
            </Typography>
            <Typography color={grey[400]} fontSize={16}>
              Dành cho doanh nghiệp
            </Typography>
            <Typography color={grey[400]} fontSize={16}>
              Hợp tác
            </Typography>
            <Typography color={grey[400]} fontSize={16}>
              Giảng viên
            </Typography>
            <Typography color={grey[400]} fontSize={16}>
              Trở thành giảng viên
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <Typography color="white.main" textTransform="uppercase">
              Cộng đồng
            </Typography>
            <Typography color={grey[400]} fontSize={16}>
              Facebook
            </Typography>
            <Typography color={grey[400]} fontSize={16}>
              Youtube
            </Typography>
            <Typography color={grey[400]} fontSize={16}>
              Instagram
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <TextField
              select
              color="white"
              value={language}
              onChange={(e: any) => handleChange(e)}
              sx={{ minWidth: 200 }}
            >
              <MenuItem value="english">English</MenuItem>
              <MenuItem value="vietnamese">Tiếng Việt</MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </Stack>
      <Stack flexDirection="row" p="10px 50px" justifyContent="space-between" alignItems="center">
        <Typography color="white.main">Acacou</Typography>
        <Typography color="white.main">© 2022 Acacou, Inc.</Typography>
      </Stack>
    </Stack>
  )
}
