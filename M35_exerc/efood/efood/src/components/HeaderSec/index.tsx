import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'
import { Imagem, LinkHome } from './styles'

const HeaderSec = () => {
  return (
    <Imagem style={{ backgroundImage: `url(${fundo})` }}>
      <div className="container">
        <LinkHome to={'/'}>Restaurantes</LinkHome>
        <LinkHome to={'/'}>
          <img src={logo} alt="logo e-food" />
        </LinkHome>
        <span> 0 produtos no carrinho</span>
      </div>
    </Imagem>
  )
}
export default HeaderSec
