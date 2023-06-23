import { FC } from 'react'
import { Card } from '../Card/Card'
import { Card as CardProps } from '@/types/types'
import { Container } from './Grid.styled'

interface Props {
  cards: CardProps[]
}

export const Grid: FC<Props> = (props) => {
  return (
    <Container>
      {props.cards.map((card) => (
        <Card key={card.id} id={card.id} emoji={card.emoji} />
      ))}
    </Container>
  )
}
