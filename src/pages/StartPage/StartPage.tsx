import { FC } from 'react'
import { Typography } from '@mui/material'
import { Colors } from '@/constants/styles'
import { MainPageWrapper, Title } from './StartPage.styles'
import { ButtonContent } from '@/pages/StartPage/components/PlayButton/ButtonContent'
import { Sun } from '@/pages/StartPage/components/Sun/Sun'

export const StartPage: FC = () => (
  <MainPageWrapper>
    <Sun />
    <Title />
    <ButtonContent></ButtonContent>
  </MainPageWrapper>
)
