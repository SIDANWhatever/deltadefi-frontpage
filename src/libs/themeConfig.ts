import { createTheme } from '@mui/material/styles'
import theme from '@src/styles/modules/theme.module.scss'
const mainTheme = createTheme({
  palette: {
    primary: {
      main: theme.primary
    },
    secondary: {
      main: theme.secondary
    },
    error: {
      main: theme.errorColor
    },
    success: {
      main: theme.successColor
    }
  },
  typography: {
    fontFamily: ['"Helvetica Neue"'].join(','),
    fontSize: parseInt(theme.baseFontSize),
    h1: {
      fontSize: theme.h1FontSize,
      fontWeight: parseInt(theme.h1FontWeight)
    },
    h2: {
      fontSize: theme.h2FontSize,
      fontWeight: parseInt(theme.h2FontWeight)
    },
    h3: {
      fontSize: theme.h3FontSize,
      fontWeight: parseInt(theme.h3FontWeight)
    },
    h4: {
      fontSize: theme.h4FontSize,
      fontWeight: parseInt(theme.h4FontWeight)
    },
    h5: {
      fontSize: theme.h5FontSize,
      fontWeight: parseInt(theme.h5FontWeight)
    },
    h6: {
      fontSize: theme.h6FontSize,
      fontWeight: parseInt(theme.h6FontWeight)
    }
  }
})

export default mainTheme
