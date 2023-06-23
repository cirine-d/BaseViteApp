//import { Colors } from '@/constants/styles'
import styled from '@emotion/styled'
import backgroundImage from './images/beach-background.png'
import title from './images/Summer-memory-title.png'

export const MainPageWrapper = styled.main`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-image: url(${backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
export const Title = styled.div`
  height: 60vh;
  width: 60vw;
  position: absolute;
  top: 10%;
  left: 22%;
  background-image: url(${title});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
