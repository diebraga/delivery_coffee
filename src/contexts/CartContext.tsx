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
  setCart: (value: ProductType[] | ((val: ProductType[]) => ProductType[])) => void,
  cartNotificationOn: number
  setCartNotificationOn: (value: number | ((val: number) => number)) => void
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProp) {
  const [cart, setCart] = useLocalStorage<ProductType[]>("coffee.delivery.cart", [])
  const [cartNotificationOn, setCartNotificationOn] = useLocalStorage<number>("coffee.delivery.cart.notification.status", 0)

  return (
    <CartContext.Provider value={{
      cart,
      setCart,
      cartNotificationOn,
      setCartNotificationOn
    }}>
      {children}
    </CartContext.Provider>
  )
}
