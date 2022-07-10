import { blue } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#212529',
    },
    secondary: {
      main: '#505763',
    },
    black: {
      main: '#1c1d1f',
    },
    white: {
      main: '#ffffff',
    },
    error: {
      main: '#EC5252',
    },
    blueGrey: {
      main: '#26394E',
    },
    blackGrey: {
      main: '#101010',
    },
    greyDefault: {
      main: '#f2f3f5',
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'text' },
          style: {
            color: '#505763',
            boxShadow: 'none',
            border: '1px solid transparent',
            padding: '15px',
            '&:hover': {
              boxShadow: 'none',
              border: '1px solid #cccccc7d',
              backgroundColor: '#cccccc40',
            },
          },
        },
      ],
      styleOverrides: {
        root: {
          height: 45,
          minWidth: 100,
          textTransform: 'initial',
        },
      },
    },
    MuiIconButton: {
      variants: [
        {
          props: { color: 'blueGrey' },
          style: {
            backgroundColor: '#26394E',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#26394E',
            },
          },
        },
      ],
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(16, 16, 16, 0.2)',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: ['Nunito'],
          color: '#303030',
          // "Noto_Sans_JP, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;",
        },
        h3: {
          fontSize: 16,
        },
        h4: {
          fontSize: 14,
        },
        h5: {
          fontSize: 12,
        },
        h6: {
          fontSize: 10,
        },
      },
    },
    MuiTextField: {
      variants: [
        {
          props: { size: 'small' },
          style: {
            backgroundColor: '#f2f3f5!important',
            '& .MuiOutlinedInput-input': {
              padding: '10px 8px 10px 15px',
            },
            '& .MuiOutlinedInput-input:hover': {
              borderColor: 'red',
            },
          },
        },
        {
          props: { variant: 'outlined', color: 'white' },
          style: {
            '& > div': {
              backgroundColor: '#fff',
            },
            '& .MuiOutlinedInput-input': {
              padding: '10px 8px 10px 15px',
            },
          },
        },
      ],
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'initial',
        },
      },
    },
    // MuiDialog: {
    //   styleOverrides: {
    //     root: {
    //       overflow: 'hidden',
    //       '& .MuiPaper-root': {
    //         boxShadow: 'none',
    //         borderRadius: '16px',
    //       },
    //     },
    //   },
    // },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          padding: '12px 16px',
          '&.Mui-selected': {
            backgroundColor: '#F5F7FB',
          },
          '&:hover': {
            backgroundColor: '#F5F7FB',
          },
        },
      },
    },
  },
})

declare module '@mui/material/styles' {
  interface Palette {
    white: Palette['primary']
    black: Palette['primary']
    blueGrey: Palette['primary']
    blackGrey: Palette['primary']
    greyDefault: Palette['primary']
  }
  interface PaletteOptions {
    white?: PaletteOptions['primary']
    black?: PaletteOptions['primary']
    blueGrey?: PaletteOptions['primary']
    blackGrey?: PaletteOptions['primary']
    greyDefault?: PaletteOptions['primary']
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    black: true
    white: true
  }
}

declare module '@mui/material/SvgIcon' {
  interface SvgIconPropsColorOverrides {
    white: true
    black: true
    blueGrey: true
    blackGrey: true
  }
}

declare module '@mui/material/TextField' {
  interface TextFieldPropsColorOverrides {
    grey: true
    white: true
  }
}

declare module '@mui/material/IconButton' {
  interface IconButtonPropsColorOverrides {
    blueGrey: true
  }
}

export default theme
