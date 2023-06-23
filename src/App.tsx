import { FC } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { StartPage } from './pages/StartPage/StartPage'

export const App: FC = () => (
  <ThemeProvider theme={{}}>
    <CssBaseline />
    <StartPage />
  </ThemeProvider>
)
