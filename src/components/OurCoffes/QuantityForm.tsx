import { Button, HStack, IconButton, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react"
import { useState } from "react"
import { IoMdCart } from "react-icons/io"
import { useCart } from "../../hooks/useCart"
import { useInputControl } from "../../hooks/useInputControl"

interface Props {
  imageSrc: string
  title: string
  price: number
  productRef: string
}

type ProductType = {
  productRef: string
  picture: string
  title: string
  price: number
  quantity: number
}

export function QuantityForm({ imageSrc, price, title, productRef }: Props) {
  const {
    setCart,
    cart
  } = useCart()

  const currentItem = cart.find(item => item.productRef === productRef)

  const {
    count,
    decrement,
    icrement,
    setCount
  } = useInputControl({ defaultNum: currentItem?.quantity })

  
  function handeleAddToCart() {
    const newProduct: ProductType = {
      picture: imageSrc,
      title,
      price,
      productRef,
      quantity: count
    }
    setCart(prev => {
      if (prev.find(item => item.productRef === productRef)) {
        return prev.map(item => {
          return {
            ...item,
            quantity: count
          }
        })
      } else {
        return [...prev, newProduct]
      }
    })
  }

  // console.log(cart)
  return (
    <HStack>
      <InputGroup size='sm'>
        <InputLeftElement>
          <Button
            size='xs'
            bg='transparent'
            onClick={decrement}
            color='#4B2995'
          >
            -
          </Button>
        </InputLeftElement>
        <Input
          type={'number'}
          borderRadius='6px'
          w='80px'
          variant={'filled'}
          bg='#E6E5E5'
          textAlign={'center'}
          value={count}
          readOnly
          onChange={e => setCount(Number(e.target.value))}
          focusBorderColor='#4B2995'
        />
        <InputRightElement>
          <Button
            size='xs'
            bg='transparent'
            onClick={icrement}
            color='#4B2995'
          >
            +
          </Button>
        </InputRightElement>
      </InputGroup>
      <IconButton
        aria-label='Add to cart'
        icon={<IoMdCart
          fill='white'
        />}
        size='sm'
        bg='#4B2995'
        disabled={count < 1}
        onClick={(handeleAddToCart)}
      />
    </HStack>
  )
}
