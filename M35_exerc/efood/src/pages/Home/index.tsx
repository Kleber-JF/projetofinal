import Restaurante from '../../models/Restaurante'
import sushi from '../../assets/images/sushi.png'
import spaghetti from '../../assets/images/spaghetti.png'
import Header from '../../components/Header'
import Restaurants from '../../components/Restaurants'

const listaCompleta: Restaurante[] = [
  {
    id: 1,
    nome: 'Hioki Sushi',
    categoriaDestaque: ['Destaque da semana', 'Japonesa'],
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    imagem: sushi,
    nota: 4.9,
    url: '/hiokisushi'
  },
  {
    id: 2,
    nome: 'La Dolce Vita Trattoria',
    categoriaDestaque: ['Italiana'],
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: spaghetti,
    nota: 4.6,
    url: '/ladolce'
  },
  {
    id: 3,
    nome: 'La Dolce Vita Trattoria',
    categoriaDestaque: ['Italiana'],
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: spaghetti,
    nota: 4.6,
    url: '/ladolce'
  },
  {
    id: 4,
    nome: 'La Dolce Vita Trattoria',
    categoriaDestaque: ['Italiana'],
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: spaghetti,
    nota: 4.6,
    url: '/ladolce'
  },
  {
    id: 5,
    nome: 'La Dolce Vita Trattoria',
    categoriaDestaque: ['Italiana'],
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: spaghetti,
    nota: 4.6,
    url: '/ladolce'
  },
  {
    id: 6,
    nome: 'La Dolce Vita Trattoria',
    categoriaDestaque: ['Italiana'],
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    imagem: spaghetti,
    nota: 4.6,
    url: '/ladolce'
  }
]

const Home = () => (
  <>
    <Header />
    <Restaurants restaurants={listaCompleta} />
  </>
)

export default Home
