import estrela from '../../assets/images/estrela.png'
import { Card, CardTextBox, CardTitle, Infos } from './styles'
import { TagContainer, TagLink } from '../Tag/styles'

type Props = {
  nome: string
  categoriaDestaque: string[]
  descricao: string
  imagem: string
  nota: number
  url?: string
}

export const RestaurantCard = ({
  nome,
  categoriaDestaque,
  descricao,
  imagem,
  nota,
  url
}: Props) => (
  <Card>
    <img src={imagem} alt={nome} />
    <Infos>
      {categoriaDestaque.map((info) => (
        <TagContainer type="tag" key={info}>
          {info}
        </TagContainer>
      ))}
    </Infos>
    <CardTextBox>
      <CardTitle>
        <h3>{nome}</h3>
        <span>
          {nota}
          <img src={estrela} alt="estrela" />
        </span>
      </CardTitle>
      <p>{descricao}</p>
      <TagLink to={`${url}`}>Saiba mais</TagLink>
    </CardTextBox>
  </Card>
)
export default RestaurantCard
