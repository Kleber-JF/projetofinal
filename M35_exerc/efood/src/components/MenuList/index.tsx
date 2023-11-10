import PratoCard from '../PratoCard'
import { CardapioList } from './styles'
import { PratoItem } from '../../pages/Home'

export type Props = {
  pratos: PratoItem[]
}

const MenuLista = ({ pratos }: Props) => (
  <div className="container">
    <CardapioList>
      {pratos.map((prato) => (
        <li key={prato.id}>
          <PratoCard
            descricao={prato.descricao}
            nome={prato.nome}
            foto={prato.foto}
            preco={prato.preco}
            id={prato.id}
            porcao={prato.porcao}
            prato={prato}
          />
        </li>
      ))}
    </CardapioList>
  </div>
)

export default MenuLista
