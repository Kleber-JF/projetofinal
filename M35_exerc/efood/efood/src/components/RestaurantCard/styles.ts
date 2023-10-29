import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  width: 472px;
  margin-bottom: 40px;
  position: relative;

  > img {
    margin-bottom: -4px;
    width: 472px;
    height: 216px;
    object-fit: cover;
  }
`

export const CardTextBox = styled.div`
  padding: 8px;
  border: 1px solid ${cores.vermelhoClaro};
  border-top: none;
  background-color: ${cores.branco};

  p {
    margin-bottom: 16px;
  }
`

export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  font-weight: bold;

  > span {
    display: flex;
    justify-content: center;
    align-items: center;

    > img {
      margin-left: 8px;
    }
  }
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  ${TagContainer} {
    margin-left: 8px;
    font-size: 12px;
  }
`
