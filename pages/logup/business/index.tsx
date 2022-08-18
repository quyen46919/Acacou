import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import React from 'react'

export default function BusinessLogup() {
  return (
    <Box bgcolor="#F0F0F0" minHeight="100vh" overflow="hidden">
      <Stack
        flexDirection={{ xs: 'column', md: 'row' }}
        width={{ xs: '100%', md: '80%' }}
        m="0 auto"
        p={{ xs: '30px', md: '30px 0px' }}
        gap="30px"
      >
        <Stack width={{ xs: '100%', md: '50%' }} gap="30px">
          <Typography variant="h2">Get Your Demo</Typography>
          <Typography variant="h3" fontSize="25px">
            See why leading organizations choose OnEdu for Business as their destination for
            employee learning
          </Typography>
          <Stack borderLeft="5px solid #B82B2B" pl="20px" color="black.main">
            <Typography
              variant="h3"
              fontWeight="bold"
              fontSize="21px"
              component="ul"
              pl="0px"
              sx={{ listStyleType: 'disc' }}
            >
              In your demo, learn more about:
            </Typography>
            <Typography component="li" p="10px" fontSize="15px">
              Unlimit access to the top 3,500+ course selected from Udemy.com - anytime, on any
              device
            </Typography>
            <Typography component="li" p="10px" fontSize="15px">
              Unlimit access to the top 3,500+ course selected from Udemy.com - anytime, on any
              device
            </Typography>
            <Typography component="li" p="10px" fontSize="15px">
              Unlimit access to the top 3,500+ course selected from Udemy.com - anytime, on any
              device
            </Typography>
          </Stack>
        </Stack>
        <Stack width={{ xs: '100%', md: '50%' }}>
          <Typography fontSize="40px" fontWeight="bold" mb="20px">
            Sign up
          </Typography>
          <Stack gap="10px">
            <Stack flexDirection={{ xs: 'column', sm: 'row' }} gap="10px">
              <TextField
                fullWidth
                color="info"
                variant="outlined"
                size="medium"
                placeholder="First name*"
              />
              <TextField
                fullWidth
                color="info"
                variant="outlined"
                size="medium"
                placeholder="Last name*"
              />
            </Stack>
            <TextField
              fullWidth
              color="info"
              variant="outlined"
              size="medium"
              placeholder="Work email*"
            />
            <TextField
              fullWidth
              color="info"
              variant="outlined"
              size="medium"
              placeholder="Job title*"
            />
            <TextField
              fullWidth
              color="info"
              variant="outlined"
              size="medium"
              placeholder="Company name*"
            />
            <TextField
              fullWidth
              color="info"
              variant="outlined"
              size="medium"
              placeholder="Phone number*"
            />
            <TextField
              fullWidth
              color="info"
              variant="outlined"
              size="medium"
              placeholder="What are your training need?*"
            />
            <FormControlLabel
              color="info"
              control={<Checkbox color="info" />}
              label="I'd like to recive news, insights, and promotions form Acacou for Business"
              labelPlacement="end"
            />
            <Button fullWidth variant="contained" color="error">
              Get in touch
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}
