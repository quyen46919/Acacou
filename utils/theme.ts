import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: '#ff6464',
    },
    secondary: {
      main: '#00abcc',
    },
    error: {
      main: red.A400,
    },
  },
})
