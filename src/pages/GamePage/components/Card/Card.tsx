import { FC } from 'react'
import { FlippedCard, UnFlippedCard } from './Card.styled'
import { Card as CardProps } from '@/types/types'

export const Card: FC<CardProps> = ({ id, emoji, onCardFlip, getIsFlipped }) =>
  getIsFlipped(id) ? (
    <FlippedCard>{emoji}</FlippedCard>
  ) : (
    <UnFlippedCard onClick={() => onCardFlip(id)} />
  )
