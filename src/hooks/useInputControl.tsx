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
    willDelete,
  }: {
    array: ProductType[],
    newProduct: ProductType,
    willDelete: boolean,
  }) {
    if (willDelete) {
      toast.closeAll()
      toast({
        render: () => <ToastNotification title="Deleted" content={`${newProduct.title} has been deleted from your cart`} color='red.500' />,
        position: 'top'
      })
      return array.filter(item => item.productRef !== newProduct.productRef)
    } else if (array.some(item => item.productRef === newProduct.productRef)) {
      return array.map(item => {
        if (item.productRef === newProduct.productRef) {
          toast.closeAll()
          toast({
            render: () => <ToastNotification title="Updated" content={`You have ${count} ${item.title} in your cart`} color='blue.500' />,
            position: 'top'
          })    
          return {
            ...item,
            quantity: count,
            price: newProduct.price
          }
        } else return item
      })
    } else {
      setCartNotificationOn(prev => prev + 1)
      toast.closeAll()
      toast({
        render: () => <ToastNotification title="New" content={`You have ${count} ${newProduct.title} in your cart`} color='green.500' />,
        position: 'top'
      })
      array.filter(item => item.productRef !== newProduct.productRef)
      return [...array, newProduct]
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
