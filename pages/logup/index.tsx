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
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import React from 'react'

interface RegisterInput {
  fullName: string
  email: string
  password: string
  retypePassword: string
}

const messages = {
  email: 'Invalid email format',
  notMatchPassword: "Retype password doesn't match",
  requiredField: (value: string): string => `Field ${value} is required`,
  maxLength: (value: number): string => `Max length is ${value}`,
  minLength: (value: number): string => `Min length is ${value}`,
}

export default function Logup() {
  const { register, formState, setError, handleSubmit, clearErrors } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    mode: 'onBlur',
    resolver: yupResolver(
      Yup.object({
        fullName: Yup.string()
          .min(5, messages.minLength(5))
          .max(255, messages.maxLength(50))
          .required(messages.requiredField('fullName')),
        email: Yup.string()
          .email(messages.email)
          .min(5, messages.minLength(5))
          .max(255, messages.maxLength(50))
          .required(messages.requiredField('email')),
        password: Yup.string().required(messages.requiredField('password')),
        retypePassword: Yup.string()
          .when('password', {
            is: (val: string) => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf([Yup.ref('password')], messages.notMatchPassword),
          })
          .required(messages.requiredField('password')),
      })
    ),
  })

  const handleFormSubmit = (value: RegisterInput) => {
    console.log(value)
  }

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
          <CardContent
            sx={{ display: 'flex', flexDirection: 'column', gap: '15px', p: '30px' }}
            component="form"
            onSubmit={handleSubmit(handleFormSubmit)}
            data-testid="logup-form"
          >
            <TextField
              {...register('fullName')}
              helperText={formState.errors.fullName?.message}
              error={!!formState.errors.fullName}
              placeholder="Fullname"
              color="info"
              size="medium"
              onChange={(value: any) => {
                console.log(value.target.value)
              }}
              spellCheck="false"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person />
                  </InputAdornment>
                ),
                inputProps: { 'data-testid': 'account-fullName', maxLength: 50 },
              }}
            />
            <TextField
              {...register('email')}
              helperText={formState.errors.email?.message}
              error={!!formState.errors.email}
              data-testid="account-email"
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
              {...register('password')}
              helperText={formState.errors.password?.message}
              error={!!formState.errors.password}
              data-testid="account-password"
              placeholder="Password"
              type="password"
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
            <TextField
              {...register('retypePassword')}
              helperText={formState.errors.retypePassword?.message}
              error={!!formState.errors.retypePassword}
              data-testid="account-retype-password"
              placeholder="Retype Password"
              type="password"
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
            <Button
              type="submit"
              variant="contained"
              color="error"
              sx={{ height: 55, fontSize: '18px' }}
              data-testid="button"
            >
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
