import { useState } from "react"

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
      return array.map(item => {
        return {
          ...item,
          price: newProduct.price,
          quantity: count
        }
      })
    } else if (statement2) {
      return [...array, newProduct]
    } else return array.filter(item => item.productRef !== newProduct.productRef)
  }

  return {
    count,
    icrement,
    decrement,
    setCount,
    handeleCartControl
  }
}
