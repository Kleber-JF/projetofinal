import styled from 'styled-components'
import { cores } from '../../styles'

export const CardContainer = styled.div`
  width: 320px;
  position: relative;
  padding: 8px;
  background-color: ${cores.vermelhoClaro};

  img {
    width: 304px;
    height: 168px;
    margin-bottom: -4px;
    object-fit: cover;
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
    font-weight: 400;
    font-size: 14px;
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 1;
  background-color: ${cores.vermelhoClaro};
  color: ${cores.begeEscuro};
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  > img {
    width: 16px;
    height: 16px;
    margin-top: 8px;
    margin-right: 8px;
    cursor: pointer;
  }

    h4 {
      font-size: 18px;
      font-weight: bold;
    }
  }
`

export const ModalText = styled.div`
  display: flex;
  padding: 8px 32px 32px 32px;
  column-gap: 24px;

  img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  p {
    line-height: 22px;
    font-size: 14px;
    font-weight: 100;
    margin: 16px 0;
  }

  button {
    max-width: 218px;
    margin-top: 0;
  }
`
