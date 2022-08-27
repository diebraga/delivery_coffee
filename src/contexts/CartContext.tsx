import { createContext, ReactNode } from 'react'
import { FieldErrorsImpl, SubmitHandler, useForm, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'
import { ProductType, SummaryType } from '../@types/products'
import { useLocalStorage } from '../hooks/useLocalStorage'

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
  summary: SummaryType
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

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    mode: 'all'
  });

  const totalPriceEveryItem = cart.map(item => item.totalPrice).reduce((prev, curr) => prev + curr, 0);

  const deliveryPrice = cart.length > 0 ? 3.50 : 0

  const summary: SummaryType = {
    totalPriceEveryItem,
    deliveryPrice
  }
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  console.log(totalPriceEveryItem)

  return (
    <CartContext.Provider value={{
      cart,
      setCart,
      cartNotificationOn,
      setCartNotificationOn,
      handleSubmit,
      onSubmit,
      register,
      errors,
      summary
    }}>
      {children}
    </CartContext.Provider>
  )
}
