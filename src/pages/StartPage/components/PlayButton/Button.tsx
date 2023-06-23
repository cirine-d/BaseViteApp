import { FC } from 'react'
import { Typography } from '@mui/material'
import { Colors } from '@/constants/styles'
import { StyledButton } from './Button.styled'

interface Props {
  onButtonClick: () => void
}

export const Button: FC<Props> = (props) => (
  <StyledButton onClick={props.onButtonClick}>
    <Typography variant="h4" fontWeight={600} color={Colors.TiffanyBlue}>
      Play
    </Typography>
  </StyledButton>
)
