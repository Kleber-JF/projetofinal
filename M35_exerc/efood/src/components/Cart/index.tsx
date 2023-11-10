import { useDispatch, useSelector } from 'react-redux'
import {
  CartContainer,
  CartItem,
  InfoBox,
  Overlay,
  Sidebar,
  TrashContainer,
  ValorTotal
} from './styles'
import trashBin from '../../assets/images/trash.png'
import { BotaoAdicionar } from '../../styles'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../PratoCard'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <>
              <CartItem>
                <InfoBox>
                  <img src={item.foto} alt="pizza" />
                  <div>
                    <p>{item.nome}</p>
                    <span>{formataPreco(item.preco)}</span>
                  </div>
                </InfoBox>
                <TrashContainer>
                  <img
                    src={trashBin}
                    alt="lixeira"
                    onClick={() => removeItem(item.id)}
                  />
                </TrashContainer>
              </CartItem>
            </>
          ))}
        </ul>
        <ValorTotal>
          <p>Valor total</p>
          <span>{formataPreco(getTotalPrice())}</span>
        </ValorTotal>
        <BotaoAdicionar>Continuar com a entrega</BotaoAdicionar>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
