import estrela from '../../assets/images/estrela.png'
import { Card, CardTextBox, CardTitle, Infos } from './styles'
import { TagContainer, TagLink } from '../Tag/styles'

type Props = {
  titulo: string
  categoria: string
  destaque?: boolean
  descricao: string
  imagem: string
  nota: number
  id: number
}

export const RestaurantCard = ({
  titulo,
  categoria,
  destaque,
  descricao,
  imagem,
  nota,
  id
}: Props) => {
  const getDescription = (descricao: string) => {
    if (descricao.length > 290) {
      return descricao.slice(0, 287) + '...'
    }
    return descricao
  }
  return (
    <Card>
      <img src={imagem} alt={titulo} />
      {destaque ? (
        <Infos>
          <TagContainer type="tag">{'Destaque da semana'}</TagContainer>
          <TagContainer type="tag">
            {`${categoria.charAt(0).toUpperCase() + categoria.slice(1)}`}
          </TagContainer>
        </Infos>
      ) : (
        <Infos>
          <TagContainer type="tag">
            {`${categoria.charAt(0).toUpperCase() + categoria.slice(1)}`}
          </TagContainer>
        </Infos>
      )}
      <CardTextBox>
        <CardTitle>
          <h3>{titulo}</h3>
          <span>
            {nota}
            <img src={estrela} alt="estrela" />
          </span>
        </CardTitle>
        <p>{getDescription(descricao)}</p>
        <TagLink to={`/restaurant/${id}`}>Saiba mais</TagLink>
      </CardTextBox>
    </Card>
  )
}
export default RestaurantCard
