import { FC } from 'react'
import { Typography } from '@mui/material'
import { Colors } from '@/constants/styles'

export const ButtonContent: FC = () => (
  <Typography variant="subtitle1" fontWeight={600} color={Colors.Rufous}>
    <button>Play</button>
  </Typography>
)
