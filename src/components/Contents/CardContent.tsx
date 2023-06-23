import { FC } from 'react'

interface Props {
  id: number
  siblingId: number
  imgFile: string
  name: string
}

export const CardContent: FC<Props> = ({ id, siblingId, imgFile, name }) => {
  return <div>{name}</div>
}
