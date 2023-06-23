import { FC } from 'react'
import { Typography } from '@mui/material'
import { Colors } from '@/constants/styles'
import { Button } from './Button.styled'

export const ButtonContent: FC = () => (
  <Button>
    <Typography variant="subtitle1" fontWeight={600} color={Colors.Rufous}>
      Play
    </Typography>
  </Button>
)
