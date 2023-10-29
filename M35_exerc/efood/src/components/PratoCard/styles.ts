import styled from 'styled-components'
import { cores } from '../../styles'

export const CardContainer = styled.div`
  width: 320px;
  position: relative;
  padding: 8px;
  background-color: ${cores.vermelhoClaro};

  img {
    width: 304px;
    margin-bottom: -4px;
  }
`
export const CardText = styled.div`
  color: ${cores.begeEscuro};

  h4,
  p {
    padding-top: 8px;
  }

  h4 {
    font-size: 16px;
  }

  p {
    line-height: 22px;
    font-weight: 100;
    font-size: 14px;
  }
`
export const BotaoAdicionar = styled.button`
  margin-top: 8px;
  padding: 4px 0;
  width: 100%;
  color: ${cores.vermelhoClaro};
  background-color: ${cores.begeEscuro};
  font-weight: bold;
  font-size: 14px;
  border: none;
  cursor: pointer;
`
