import { Grid } from '@/pages/GamePage/components/Grid/Grid'
import { FC, useEffect, useState } from 'react'
import { MainPageWrapper } from '../StartPage/StartPage.styles'
import { Card, Emojis, FlippedCards } from '@/types/types'
import { emojis } from './data/Emojis'
import { Sun } from '../StartPage/components/Sun/Sun'

export const GamePage: FC = () => {
  const [flipped, setFlipped] = useState<FlippedCards>({
    A: undefined,
    B: undefined,
  })

  const cards: Card[] = emojis
    .map((emoji) => [
      {
        id: `${emoji.label}A`,
        siblingId: `${emoji.label}B`,
        emoji: emoji.emoji,
      },
      {
        id: `${emoji.label}B`,
        siblingId: `${emoji.label}A`,
        emoji: emoji.emoji,
      },
    ])
    .flat()

  useEffect(() => {
    //TODO Randomization
  }, [])

  useEffect(() => {}, [])

  const getIsFlipped = (id: string) => {
    return flipped.A === id || flipped.B === id
  }

  return (
    <MainPageWrapper>
      <Sun />
      <Grid cards={cards}></Grid>
    </MainPageWrapper>
  )
}
