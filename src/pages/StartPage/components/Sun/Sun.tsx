import { GameState } from '@/types/types'
import {
  BaseGame,
  BaseStart,
  Ray1,
  Ray10,
  Ray2,
  Ray3,
  Ray4,
  Ray5,
  Ray6,
  Ray7,
  Ray8,
  Ray9,
  RayBox,
} from './Sun.styled'

export const Sun = (props: { gameState: GameState }) => {
  const sunContent = (
    <RayBox>
      <Ray1 />
      <Ray2 />
      <Ray3 />
      <Ray4 />
      <Ray5 />
      <Ray6 />
      <Ray7 />
      <Ray8 />
      <Ray9 />
      <Ray10 />
    </RayBox>
  )

  return props.gameState === 'StartPage' ? (
    <BaseStart>{sunContent}</BaseStart>
  ) : (
    <BaseGame>{sunContent}</BaseGame>
  )
}
