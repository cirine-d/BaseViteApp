import { Card as CardProps } from '@/types/types'
import { FC } from 'react'
import { FlippedCard } from './Card.styled'

export const Card: FC<Omit<CardProps, 'siblingId'>> = ({ id, emoji }) => {
  return <FlippedCard>{emoji}</FlippedCard>
}
