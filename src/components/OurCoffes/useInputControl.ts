import { useState } from "react"

interface Props {
  defaultNum?: number
}

export function useInputControl({ defaultNum = 1 }: Props) {
  const [count, setCount] = useState<number>(defaultNum)

  function icrement() {
    if (count < 9) {
      setCount(prev => prev + 1)
    }
  }

  function decrement() {
    if (count > 1) {
      setCount(prev => prev - 1)
    }
  }

  return {
    count,
    icrement,
    decrement,
    setCount
  }
}
