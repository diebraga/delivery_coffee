import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { CartProvider } from './contexts/CartContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ChakraProvider>
  </React.StrictMode>
)
