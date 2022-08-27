import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/Header'
import { Router } from "./Router"
import { CartProvider } from './contexts/CartContext'
import '../src/styles/global.css'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Router />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
