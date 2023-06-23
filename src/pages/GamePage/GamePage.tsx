import { GridContent } from '@/pages/GamePage/components/GridContent'
import { FC, useEffect, useState } from 'react'
import { MainPageWrapper } from '../StartPage/StartPage.styles'
import { Card, Emojis } from '@/types/types'

const emojis: Emojis[] = [
  {
    label: 'Surfer',
    emoji: '🏄',
  },
  {
    label: 'Shell',
    emoji: '🐚',
  },
  {
    label: 'Drink',
    emoji: '🍹',
  },
  {
    label: 'Island',
    emoji: '🏝️',
  },
  {
    label: 'Sunglasses',
    emoji: '🕶️',
  },
  {
    label: 'Bikini',
    emoji: '👙',
  },
  {
    label: 'Sunflower',
    emoji: '🌻',
  },
  {
    label: 'Swimmer',
    emoji: '🏊',
  },
]

interface FlippedCards {
  A: string | undefined
  B: string | undefined
}

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
      <GridContent cards={cards}></GridContent>
    </MainPageWrapper>
  )
}
