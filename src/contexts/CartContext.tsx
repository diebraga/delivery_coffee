import { createContext, ReactNode } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import Products from '../data/products.json'

type ProductType = typeof Products

interface CartProviderProp {
  children: ReactNode
}

interface CartContextProps {
  cart: ProductType[]
  setCart: any
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProp) {
  const [cart, setCart] = useLocalStorage<ProductType[]>("coffee.delivery.cart", [])

  return (
    <CartContext.Provider value={{
      cart,
      setCart
    }}>
      {children}
    </CartContext.Provider>
  )
}
