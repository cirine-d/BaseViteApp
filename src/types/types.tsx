export interface Card {
  id: number
  //siblingId: number
  imgFile: string
  name: string
}

export type GameState = 'StartPage' | 'GamePage'
