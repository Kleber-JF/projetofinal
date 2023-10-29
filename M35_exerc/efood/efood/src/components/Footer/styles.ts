import styled from 'styled-components'
import { cores } from '../../styles'

export const Rodape = styled.footer`
  background-color: ${cores.begeEscuro};
  height: 300px;

  p {
    font-size: 10px;
    text-align: center;
    padding-top: 80px;
    padding-bottom: 40px;
  }
`
export const FooterImages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 125px;
    padding-top: 40px;
  }
`
