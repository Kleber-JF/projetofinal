import { BotaoAdicionar, CardContainer, CardText } from './styles'

type Props = {
  nome: string
  descricao: string
  image: string
}

const PratoCard = ({ nome, descricao, image }: Props) => (
  <CardContainer>
    <img src={image} alt="pizza" />
    <CardText>
      <h4>{nome}</h4>
      <p>{descricao}</p>
    </CardText>
    <BotaoAdicionar type="button">Adicionar ao carrinho</BotaoAdicionar>
  </CardContainer>
)

export default PratoCard
