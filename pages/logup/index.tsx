import { Email, Lock, Person } from '@mui/icons-material'
import {
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

export default function Logup() {
  return (
    <Stack
      sx={{
        width: '100%',
        height: '100vh',
        backgroundImage: `url('/images/lec1.jpg')`,
        backgroundSize: 'cover',
        backgroundColor: 'greyDefault.main',
      }}
      alignItems="center"
      justifyContent="center"
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
            Sign Up and Start Learning!
          </Typography>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '15px', p: '30px' }}>
            <TextField
              placeholder="Fullname"
              color="info"
              size="medium"
              spellCheck="false"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person />
                  </InputAdornment>
                ),
              }}
            />
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
            <FormControlLabel
              color="info"
              control={<Checkbox color="info" />}
              sx={{ '& span': { fontSize: 14 } }}
              label="Yes! I want to get the most out of OnEdu by receiving emails with exclusive deals, personal recommendations and learning tips!"
              labelPlacement="end"
            />
            <Button variant="contained" color="error" sx={{ height: 55, fontSize: '18px' }}>
              Sign up
            </Button>
            <Typography fontSize="14px" sx={{ '& a': { color: blue[600] } }}>
              By signing up, you agree to our <Link href="#">Terms of Use</Link> and{' '}
              <Link href="#">Privacy Policy</Link>
            </Typography>

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
    props: { title: 'Logup - Acacou' },
  }
}
