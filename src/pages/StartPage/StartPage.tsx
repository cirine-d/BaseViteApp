import { FC, useState } from 'react'
import { Typography } from '@mui/material'
import { Colors } from '@/constants/styles'
import { MainPageWrapper } from './StartPage.styles'
import { ButtonContent } from '@/components/Contents/ButtonContent'

interface Props {
  onStartGame: () => void
}

export const StartPage: FC<Props> = (props) => {
  return (
    <MainPageWrapper>
      <Typography variant="h3" fontWeight={800} color={[Colors.RichBlack]}>
        Summer Memory
      </Typography>
      <ButtonContent onButtonClick={props.onStartGame}></ButtonContent>
    </MainPageWrapper>
  )
}
