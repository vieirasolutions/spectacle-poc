import styled, {css } from 'styled-components'

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 8px;
  margin: 8px;
  cursor: pointer;
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

  ${({colorSelected}) => colorSelected && css`
    border: 1px solid ${({theme}) => theme.colors.primary.light};
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  `}

`

export const BoxHeader = styled.div`
  display: flex;
  padding: 1px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;

  span {
    font-size: 18px;
    font-weight: bold;
    color: ${({theme}) => theme.colors.primary.main};
  }
`

export const ColorViewer = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-image: url(${props => props.image});

`
export const Radio = styled.input`
  height: 18px;
  width: 18px;
  cursor: pointer;
`