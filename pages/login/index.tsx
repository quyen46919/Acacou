import { Email, Lock, Person } from '@mui/icons-material'
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { blue, grey } from '@mui/material/colors'
import Link from 'next/link'
import image from 'public/images/lec1.jpg'

export default function Login() {
  return (
    <Stack
      sx={{
        width: '100%',
        height: '100vh',
        backgroundImage: `url('${image.src}')`,
        backgroundSize: 'cover',
        backgroundColor: 'greyDefault.main',
      }}
    >
      <Stack
        width="100%"
        height="100%"
        bgcolor="rgba(0, 0, 0, 0.6)"
        alignItems="center"
        justifyContent="center"
      >
        <Card sx={{ width: { xs: '90%', sm: 470 } }}>
          <Typography p="20px 30px" fontWeight="bold" borderBottom={`1px solid ${grey[200]}`}>
            Login
          </Typography>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '15px', p: '30px' }}>
            <TextField
              placeholder="Email"
              color="info"
              size="medium"
              spellCheck="false"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              placeholder="Password"
              color="info"
              size="medium"
              spellCheck="false"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained" color="error" sx={{ height: 55, fontSize: '18px' }}>
              Login
            </Button>

            <Typography
              textAlign="center"
              pt="20px"
              borderTop={`1px solid ${grey[200]}`}
              sx={{ '& a': { color: blue[600] } }}
            >
              Already have an account? <Link href="/login">Log In</Link>
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  )
}

export async function getStaticProps() {
  return {
    props: { title: 'Login - Acacou' },
  }
}
