import { FC } from 'react'
import { Card } from '../Card/Card'
import { Container } from './Grid.styled'
import { Grid as GridProps } from '@/types/types'

export const Grid: FC<GridProps> = (props) => {
  return (
    <Container>
      {props.cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          emoji={card.emoji}
          onCardFlip={props.onCardFlip}
          getIsFlipped={props.getIsFlipped}
        />
      ))}
    </Container>
  )
}
