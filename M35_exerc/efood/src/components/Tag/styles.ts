import styled from 'styled-components'
import { cores } from '../../styles'
import { Props } from '.'
import { Link } from 'react-router-dom'

export const TagContainer = styled.div<Props>`
  background-color: ${cores.vermelhoClaro};
  color: ${cores.begeEscuro};
  font-size: 16px;
  font-weight: bold;
  padding: 4px 6px;
  display: inline-block;
`

export const TagLink = styled(Link)`
  text-decoration: none;
  color: ${cores.begeEscuro};
  background-color: ${cores.vermelhoClaro};
  padding: 4px 6px;
  display: inline-block;
`
