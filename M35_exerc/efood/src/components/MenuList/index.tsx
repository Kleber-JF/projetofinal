import Prato from '../../models/Prato'
import PratoCard from '../PratoCard'
import { CardapioList } from './styles'

export type Props = {
  pratos: Prato[]
}

const MenuLista = ({ pratos }: Props) => (
  <div className="container">
    <CardapioList>
      {pratos.map((prato) => (
        <li key={prato.id}>
          <PratoCard
            descricao={prato.descricao}
            nome={prato.nome}
            image={prato.image}
          />
        </li>
      ))}
    </CardapioList>
  </div>
)

export default MenuLista
