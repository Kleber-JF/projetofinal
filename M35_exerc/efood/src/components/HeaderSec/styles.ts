import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 164px;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    font-size: 18px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 56px;
    padding-bottom: 56px;
  }

  img {
    width: 125px;
    margin-left: 72px;
  }

  span {
    &:hover {
      cursor: pointer;
    }
  }
`
export const LinkHome = styled(Link)`
  text-decoration: none;
  color: ${cores.vermelhoClaro};
`
