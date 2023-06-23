import styled from '@emotion/styled'

export const StyledButton = styled.button`
  width: 230px;
  height: 95px;
  border-radius: 100px/50px;
  border-width: 0;
  box-shadow: 5px 10px #888888;
  z-index: 2;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`
