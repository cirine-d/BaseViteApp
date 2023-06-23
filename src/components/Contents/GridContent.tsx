import { FC, useState } from 'react'
import { CardContent } from '../Contents/CardContent'
import { Card } from '@/types/types'
import { GridContainer } from '@/pages/GamePage/GamePage.styles'

export const GridContent: FC = () => {
  const [cardId, setId] = useState()

  const Cards: Card[] = [{ id: 2, imgFile: '', name: '' }]

  return (
    <GridContainer>
      {Cards.map((card) => (
        <CardContent
          key={card.id}
          id={card.id}
          imgFile={card.imgFile}
          name={card.name}
          siblingId={(Cards.find((x) => card.name === x.name) as Card).id} //or image file path
        />
      ))}
    </GridContainer>
  )
}
