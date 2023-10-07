import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'
import { Imagem } from './styles'

export const HeaderPrincipal = () => (
  <Imagem style={{ backgroundImage: `url(${fundo})` }}>
    <div className="container">
      <div>
        <img src={logo} alt="logo efood" />
      </div>
      <h1>
        Viva experiências gastronômicas
        <br /> no conforto da sua casa
      </h1>
    </div>
  </Imagem>
)

export default HeaderPrincipal
