import { useDispatch, useSelector } from 'react-redux'
import logo from '../../assets/images/logo.png'
import fundo from '../../assets/images/fundo.png'
import { Imagem, LinkHome } from './styles'
import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

const HeaderSec = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <Imagem style={{ backgroundImage: `url(${fundo})` }}>
      <div className="container">
        <LinkHome to={'/'}>Restaurantes</LinkHome>
        <LinkHome to={'/'}>
          <img src={logo} alt="logo e-food" />
        </LinkHome>
        <span onClick={openCart}>{items.length} produtos no carrinho</span>
      </div>
    </Imagem>
  )
}
export default HeaderSec
