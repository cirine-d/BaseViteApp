export interface Card {
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

export type GameState = 'StartPage' | 'GamePage'
