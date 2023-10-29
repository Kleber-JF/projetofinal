import { Restaurante } from '../../pages/Home'
import RestaurantCard from '../RestaurantCard'
import { ListItem, RestaurantsContainer, RestaurantsList } from './styles'

export type Props = {
  restaurants: Restaurante[]
}

export const Restaurants = ({ restaurants }: Props) => {
  return (
    <RestaurantsContainer>
      <div className="container">
        <RestaurantsList>
          {restaurants.map((restaurant) => (
            <ListItem key={restaurant.id}>
              <RestaurantCard
                titulo={restaurant.titulo}
                categoria={restaurant.tipo}
                destaque={restaurant.destacado}
                descricao={restaurant.descricao}
                imagem={restaurant.capa}
                nota={restaurant.avaliacao}
                id={restaurant.id}
              />
            </ListItem>
          ))}
        </RestaurantsList>
      </div>
    </RestaurantsContainer>
  )
}

export default Restaurants
