import { ImagemBanner } from './styles'

type Props = {
  foto: string
  categoria: string
  nome: string
}

const Banner = ({ foto, categoria, nome }: Props) => (
  <ImagemBanner style={{ backgroundImage: `url(${foto})` }}>
    <div className="container">
      <h4>{categoria}</h4>
      <h3>{nome}</h3>
    </div>
  </ImagemBanner>
)

export default Banner
