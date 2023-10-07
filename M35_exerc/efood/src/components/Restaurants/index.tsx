import Restaurante from '../../models/Restaurante'
import RestaurantCard from '../RestaurantCard'
import { ListItem, RestaurantsContainer, RestaurantsList } from './styles'

export type Props = {
  restaurants: Restaurante[]
}

export const Restaurants = ({ restaurants }: Props) => (
  <RestaurantsContainer>
    <div className="container">
      <RestaurantsList>
        {restaurants.map((restaurant) => (
          <ListItem key={restaurant.id}>
            <RestaurantCard
              nome={restaurant.nome}
              categoriaDestaque={restaurant.categoriaDestaque}
              descricao={restaurant.descricao}
              imagem={restaurant.imagem}
              nota={restaurant.nota}
              url={restaurant.url}
            />
          </ListItem>
        ))}
      </RestaurantsList>
    </div>
  </RestaurantsContainer>
)

export default Restaurants
