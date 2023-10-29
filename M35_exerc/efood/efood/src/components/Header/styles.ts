import styled from 'styled-components'

export const Imagem = styled.div`
  width: 100%;
  height: 360px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    height: 360px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0;
  }

  h1 {
    font-weight: bold;
    width: 539px;
    text-align: center;
    font-size: 36px;
  }
`
