import { Button, HStack, IconButton, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react"
import { FC } from "react"
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

const QuantityForm: FC<Props> = ({ imageSrc, price, title, productRef }) => {
  const {
    setCart,
    cart
  } = useCart()

  const currentItem = cart && cart.find(item => item.productRef === productRef)

  const {
    count,
    decrement,
    icrement,
    setCount,
    handeleCartControl
  } = useInputControl({ defaultNum: currentItem?.quantity || 0 })

  function handleCart() {
    const newProduct: ProductType = {
      picture: imageSrc,
      title,
      price: price * count,
      productRef,
      quantity: count
    }
    setCart(prev => handeleCartControl({
      array: prev,
      newProduct,
      willDelete: count < 1
    }))
  }

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
        onClick={(handleCart)}
      />
    </HStack>
  )
}

export default QuantityForm