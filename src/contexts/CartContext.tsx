import { useToast } from '@chakra-ui/react'
import { createContext, ReactNode, useState } from 'react'
import { FieldErrorsImpl, SubmitHandler, useForm, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'
import { Inputs, PaymentOption, ProductType, SummaryType } from '../@types/products'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useNavigate } from "react-router-dom";

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
  setPeymentOption: React.Dispatch<React.SetStateAction<PaymentOption>>
  paymentOption: PaymentOption
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProp) {
  const [cart, setCart] = useLocalStorage<ProductType[]>("coffee.delivery.cart", [])
  const [cartNotificationOn, setCartNotificationOn] = useLocalStorage<number>("coffee.delivery.cart.notification.status", 0)

  const [paymentOption, setPeymentOption] = useState({} as PaymentOption)

  const [inputData, setInputData] = useState({} as Inputs)

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    mode: 'all'
  });

  const navigateTo = useNavigate();
  const toast = useToast()

  const totalPriceEveryItem = cart.map(item => item.totalPrice).reduce((prev, curr) => prev + curr, 0);

  const deliveryPrice = cart.length > 0 ? 3.50 : 0

  const summary: SummaryType = {
    delivery_info: { ...inputData },
    deliveryPrice,
    totalPriceEveryItem,
    total: deliveryPrice + totalPriceEveryItem,
    paymentOption: paymentOption.option,
    products_info: cart.map(item => {
      return {
        price_uinity: item.price,
        product_name: item.title,
        quantity: item.quantity,
        total_price: item.totalPrice
      }
    })
  }

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (!paymentOption.option) {
      toast.closeAll()
      toast({
        title: 'Error',
        description: "Choose you payment option",
        status: 'error',
        duration: 8000,
        isClosable: true,
        position: "top"
      })
    } else {
      setInputData(data)
      navigateTo('/deliveryConfirmation')
    }
  }

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
      summary,
      setPeymentOption,
      paymentOption
    }}>
      {children}
    </CartContext.Provider>
  )
}
