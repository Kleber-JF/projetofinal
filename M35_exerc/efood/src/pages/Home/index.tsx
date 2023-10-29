import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Restaurants from '../../components/Restaurants'

export interface PratoItem {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: PratoItem[]
}

const Home = () => {
  const [listaCompleta, setListaCompleta] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setListaCompleta(res))
  }, [])

  return (
    <>
      <Header />
      <Restaurants restaurants={listaCompleta} />
    </>
  )
}

export default Home
