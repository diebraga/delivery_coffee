import { createContext, ReactNode } from 'react'
import { FieldErrorsImpl, SubmitHandler, useForm, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'
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
  handleSubmit: UseFormHandleSubmit<Inputs>
  onSubmit: SubmitHandler<Inputs>
  register: UseFormRegister<Inputs>
  errors: FieldErrorsImpl<Inputs>
}

interface Inputs {
  eircode: string
  address: string
  apt: string
  city: string
  county: string
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProp) {
  const [cart, setCart] = useLocalStorage<ProductType[]>("coffee.delivery.cart", [])
  const [cartNotificationOn, setCartNotificationOn] = useLocalStorage<number>("coffee.delivery.cart.notification.status", 0)

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
    mode: 'all'
  });
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
console.log(cart)
  return (
    <CartContext.Provider value={{
      cart,
      setCart,
      cartNotificationOn,
      setCartNotificationOn,
      handleSubmit,
      onSubmit,
      register,
      errors
    }}>
      {children}
    </CartContext.Provider>
  )
}
