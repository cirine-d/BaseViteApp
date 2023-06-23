import { FC, useState } from 'react'
import { MainPageWrapper, Title } from './StartPage.styles'
import { Button } from '@/pages/StartPage/components/PlayButton/Button'
import { Sun } from '@/pages/StartPage/components/Sun/Sun'
import { Box } from '@mui/material'
import { GameState } from '@/types/types'

interface Props {
  onStartGame: () => void
  gameState: GameState
}

export const StartPage: FC<Props> = (props) => {
  return (
    <MainPageWrapper>
      <Box height="70%">
        <Sun gameState={props.gameState} />
        <Title />
      </Box>
      <Button onButtonClick={props.onStartGame}></Button>
    </MainPageWrapper>
  )
}
