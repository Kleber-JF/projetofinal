import styled from 'styled-components'
import { cores } from '../../styles'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const Sidebar = styled.aside`
  background-color: ${cores.vermelhoClaro};
  z-index: 1;
  padding: 32px 8px;
  max-width: 360px;
  width: 100%;

  ul {
    padding-bottom: 24px;
  }
`

export const CartItem = styled.li`
  height: 100px;
  padding: 8px;
  margin-bottom: 16px;
  background-color: ${cores.begeEscuro};
  display: flex;
  justify-content: space-between;

  p {
    margin-bottom: 16px;
    font-size: 18px;
    font-weight: bold;
  }

  span {
    font-size: 14px;
  }
`

export const InfoBox = styled.div`
  display: flex;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 8px;
  }
`

export const TrashContainer = styled.div`
  width: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;

  > img {
    height: 16px;
    width: 16px;

    &:hover {
      cursor: pointer;
    }
  }
`

export const ValorTotal = styled.div`
  margin-bottom: 8px;
  display: flex;
  color: ${cores.begeEscuro};
  justify-content: space-between;
  font-weight: bold;
  font-size: 14px;
`
