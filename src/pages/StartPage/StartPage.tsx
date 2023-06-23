import { FC } from 'react'
import { Typography } from '@mui/material'
import { Colors } from '@/constants/styles'
import { MainPageWrapper } from './StartPage.styles'
import { ButtonContent } from '@/components/ButtonContent'

export const StartPage: FC = () => (
  <MainPageWrapper>
    <Typography variant="h3" fontWeight={800} color={[Colors.RichBlack]}>
      Summer Memory
    </Typography>
    <ButtonContent></ButtonContent>
  </MainPageWrapper>
)
