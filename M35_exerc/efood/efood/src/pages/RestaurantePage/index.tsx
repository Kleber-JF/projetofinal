import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import HeaderSec from '../../components/HeaderSec'
import MenuLista from '../../components/MenuList'
import { useEffect, useState } from 'react'
import { Restaurante } from '../Home'

const RestaurantePage = () => {
  const { id } = useParams()

  const [restaurante, setRestaurante] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  if (!restaurante) {
    return <h4>Carregando...</h4>
  }

  return (
    <>
      <HeaderSec />
      <Banner
        foto={restaurante.capa}
        categoria={`${
          restaurante.tipo.charAt(0).toUpperCase() + restaurante.tipo.slice(1)
        }`}
        nome={restaurante.titulo}
      />
      <MenuLista pratos={restaurante.cardapio} />
    </>
  )
}

export default RestaurantePage
