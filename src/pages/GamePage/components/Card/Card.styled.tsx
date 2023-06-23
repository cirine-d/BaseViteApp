import styled from '@emotion/styled'

const Card = styled.div`
  border-radius: 12px;
  box-shadow: 5px 5px #00000047;
`

export const FlippedCard = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: xxx-large;
  margin: 5px;
  background-color: #ffffffc4;
`

export const UnFlippedCard = styled(Card)`
  background-color: #fffdcbde;
  color: transparent;
  margin: 5px;
`
