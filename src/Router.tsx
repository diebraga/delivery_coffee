import { Routes, Route } from 'react-router-dom'
import { Cart } from './pages/Cart'
import { DeliveryConfirmation } from './pages/DeliveryConfirmation'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/deliveryConfirmation" element={<DeliveryConfirmation />} />
    </Routes>
  )
}
