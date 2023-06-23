import { FC } from 'react'
import { Typography } from '@mui/material'
import { Colors } from '@/constants/styles'
import { Button } from './Button.styled'

interface Props {
  onButtonClick: () => void
}

export const ButtonContent: FC<Props> = (props) => (
  <Button onClick={props.onButtonClick}>
    <Typography variant="subtitle1" fontWeight={600} color={Colors.Rufous}>
      Play
    </Typography>
  </Button>
)
