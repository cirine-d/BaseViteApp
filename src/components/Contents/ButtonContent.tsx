import { FC } from 'react'
import { Typography } from '@mui/material'
import { Colors } from '@/constants/styles'

interface Props {
  onButtonClick: () => void
}

export const ButtonContent: FC<Props> = (props) => (
  <Typography variant="subtitle1" fontWeight={600} color={Colors.Rufous}>
    <button onClick={props.onButtonClick}>Play</button>
  </Typography>
)
