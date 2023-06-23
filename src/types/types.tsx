export interface Card {
  id: string
  siblingId: string
  emoji: string
}

export interface Emojis {
  label: string
  emoji: string
}

export type GameState = 'StartPage' | 'GamePage'
