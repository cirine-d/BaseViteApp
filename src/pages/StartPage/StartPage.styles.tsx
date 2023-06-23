//import { Colors } from '@/constants/styles'
import styled from '@emotion/styled'
import backgroundImage from './images/beach-background.png'

export const MainPageWrapper = styled.main`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-image: url(${backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`