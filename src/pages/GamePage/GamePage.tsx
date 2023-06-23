import { Grid } from '@/pages/GamePage/components/Grid/Grid'
import { FC, useEffect, useState } from 'react'
import { MainPageWrapper } from '../StartPage/StartPage.styles'
import { CardData, Emojis, FlippedCards } from '@/types/types'
import { emojis } from './data/Emojis'
import { Sun } from '../StartPage/components/Sun/Sun'

const shuffle = (array: CardData[]) => {
  let currentIndex = array.length,
    randomIndex

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }

  return array
}

export const GamePage: FC = () => {
  const [flipped, setFlipped] = useState<FlippedCards>({
    A: undefined,
    B: undefined,
  })
  const [matchedCards, setMatchedCards] = useState<string[]>([])
  const [shuffledCards, setShuffledCards] = useState<CardData[]>([])

  const cards: CardData[] = emojis
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
    const shuffledCards = shuffle(cards)
    setShuffledCards(shuffledCards)
  }, [])

  const checkCardMatch = () => {
    if (flipped.A !== undefined && flipped.B !== undefined) {
      const cardA = cards.find((x) => x.id === flipped.A)

      if (cardA?.siblingId === flipped.B) {
        const newMatchedCards = matchedCards.concat([flipped.A, flipped.B])

        setMatchedCards(newMatchedCards)
        setFlipped({ A: undefined, B: undefined })
      } else {
        setFlipped({ A: undefined, B: undefined })
      }
    }
  }
  useEffect(() => {
    const timerRef = window.setTimeout(() => {
      checkCardMatch()
    }, 1000)

    return () => clearTimeout(timerRef)
  }, [flipped])

  useEffect(() => {
    if (matchedCards.length === cards.length) {
      window.alert('Congratulations!!')
    }
  }, [matchedCards])

  const getIsFlipped = (id: string) => {
    const isFlippedCard = flipped.A === id || flipped.B === id
    const isMatchedCard = matchedCards.includes(id)
    return isFlippedCard || isMatchedCard
  }

  const handleCardFlip = (id: string) => {
    if (matchedCards.length === cards.length) {
      return null
    }

    if (matchedCards.includes(id)) {
      return null
    }

    if (flipped.A === undefined) {
      return setFlipped({
        A: id,
        B: undefined,
      })
    }

    if (flipped.A === id) {
      return null
    }

    return setFlipped({
      A: flipped.A,
      B: id,
    })
  }

  return (
    <MainPageWrapper>
      <Sun />
      <Grid
        cards={shuffledCards}
        getIsFlipped={getIsFlipped}
        onCardFlip={handleCardFlip}
      ></Grid>
    </MainPageWrapper>
  )
}
