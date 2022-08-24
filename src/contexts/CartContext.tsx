import { createContext, ReactNode } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

type ProductType = {
  productRef: string
  picture: string
  title: string
  price: number
  quantity: number
}

interface CartProviderProp {
  children: ReactNode
}

interface CartContextProps {
  cart: ProductType[]
  setCart: (value: ProductType[] | ((val: ProductType[]) => ProductType[])) => void
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
