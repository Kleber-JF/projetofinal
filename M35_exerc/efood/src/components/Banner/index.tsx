import fundo_restaurante from '../../assets/images/fundo_restaurante.png'
import { ImagemBanner } from './styles'

const Banner = () => (
  <ImagemBanner style={{ backgroundImage: `url(${fundo_restaurante})` }}>
    <div className="container">
      <h4>Italiana</h4>
      <h3>La Dolce Vita Trattoria</h3>
    </div>
  </ImagemBanner>
)

export default Banner
