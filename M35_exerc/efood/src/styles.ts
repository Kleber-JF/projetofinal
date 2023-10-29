import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelhoClaro: '#E66767',
  bege: '#FFF8F2',
  begeEscuro: '#FFEBD9',
  branco: '#FFF'
}
export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.bege};
    color: ${cores.vermelhoClaro};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
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
