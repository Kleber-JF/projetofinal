import styled from 'styled-components'
import { cores } from '../../styles'

export const ImagemBanner = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    height: 280px;
    padding: 24px 0;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    h4 {
      font-weight: 100;
    }

    h3,
    h4 {
      color: ${cores.branco};
      font-size: 32px;
    }
  }
`
