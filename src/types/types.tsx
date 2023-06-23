export interface CardData {
  id: string
  siblingId: string
  emoji: string
}

export interface Emojis {
  label: string
  emoji: string
}

export interface FlippedCards {
  A: string | undefined
  B: string | undefined
}

export interface Card extends Omit<CardData, 'siblingId'> {
  onCardFlip: (id: string) => void
  getIsFlipped: (id: string) => boolean
}

export interface Grid extends Omit<Card, 'emoji' | 'id'> {
  cards: CardData[]
}

export type GameState = 'StartPage' | 'GamePage'
