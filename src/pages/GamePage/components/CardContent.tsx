import { Card } from '@/types/types'
import { FC } from 'react'

export const CardContent: FC<Omit<Card, 'siblingId'>> = ({ id, emoji }) => {
  return <div>{emoji}</div>
}
