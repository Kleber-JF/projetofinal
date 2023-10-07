import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import RestaurantePage from './pages/RestaurantePage'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/ladolce" element={<RestaurantePage />} />
    <Route path="/hiokisushi" element={<RestaurantePage />} />
  </Routes>
)

export default Rotas
