import { FC, useState } from 'react'
import { CardContent } from './CardContent'
import { Card } from '@/types/types'
import { GridContainer } from '@/pages/GamePage/GamePage.styles'

interface Props {
  cards: Card[]
}

export const GridContent: FC<Props> = (props) => {
  const [cardId, setId] = useState()

  return (
    <GridContainer>
      {props.cards.map((card) => (
        <CardContent key={card.id} id={card.id} emoji={card.emoji} />
      ))}
    </GridContainer>
  )
}
