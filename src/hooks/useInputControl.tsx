import { useToast } from "@chakra-ui/react"
import { useState } from "react"
import { ToastNotification } from "../components/Toast"
import { useCart } from "./useCart"

interface Props {
  defaultNum?: number
}

type ProductType = {
  productRef: string
  picture: string
  title: string
  price: number
  quantity: number
}

export function useInputControl({ defaultNum = 0 }: Props) {
  const [count, setCount] = useState<number>(defaultNum)
  const toast = useToast()
  const {
    setCartNotificationOn,
  } = useCart()

  function icrement() {
    if (count < 9) {
      setCount(prev => prev + 1)
    }
  }

  function decrement() {
    if (count > 0) {
      setCount(prev => prev - 1)
    }
  }

  const id = 'toast'

  function handeleCartControl({
    array,
    newProduct,
    statement1,
    statement2
  }: {
    array: ProductType[],
    newProduct: ProductType,
    statement1: boolean,
    statement2: boolean,
  }) {
    if (statement1) {
      const foundItem = array.map(item => {
        if (statement2 && !toast.isActive(id)) {
          toast.closeAll()
          toast({
            render: () => <ToastNotification title="Updated" content={`You have ${count} ${item.title} in your cart`} color='blue.500' />,
            position: 'top'
          })
        }
        return {
          ...item,
          price: newProduct.price,
          quantity: count
        }
      })
      return foundItem
    } else if (statement2) {
      setCartNotificationOn(prev => prev + 1)
      toast.closeAll()
      toast({
        render: () => <ToastNotification title="New" content={`You have ${count} ${newProduct.title} in your cart`} color='green.500' />,
        position: 'top'
      })
      return [...array, newProduct]
    } else {
      toast.closeAll()
      toast({
        render: () => <ToastNotification title="Deleted" content={`${newProduct.title} has been deleted from your cart`} color='red.500' />,
        position: 'top'
      })
      return array.filter(item => item.productRef !== newProduct.productRef)
    }
  }

  return {
    count,
    icrement,
    decrement,
    setCount,
    handeleCartControl
  }
}
