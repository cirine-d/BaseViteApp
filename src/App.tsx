import { FC, useState } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { StartPage } from './pages/StartPage/StartPage'
import { GameState } from './types/types'
import { GamePage } from './pages/GamePage/GamePage'

export const App: FC = () => {
  const [gameState, setGameState] = useState<GameState>('StartPage')

  const clickHandler = () => {
    setGameState('GamePage')
  }

  return (
    <ThemeProvider theme={{}}>
      <CssBaseline />
      {gameState === 'StartPage' ? (
        <StartPage gameState={gameState} onStartGame={clickHandler} />
      ) : (
        <GamePage />
      )}
    </ThemeProvider>
  )
}
