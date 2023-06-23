import { FC, useState } from 'react'
import { Typography } from '@mui/material'
import { Colors } from '@/constants/styles'
import { MainPageWrapper, Title } from './StartPage.styles'
import { ButtonContent } from '@/pages/StartPage/components/PlayButton/ButtonContent'
import { Sun } from '@/pages/StartPage/components/Sun/Sun'

interface Props {
  onStartGame: () => void
}

export const StartPage: FC<Props> = (props) => {
  return (
    <MainPageWrapper>
      <Sun />
    <Title />
      <ButtonContent onButtonClick={props.onStartGame}></ButtonContent>
    </MainPageWrapper>
  )
}
