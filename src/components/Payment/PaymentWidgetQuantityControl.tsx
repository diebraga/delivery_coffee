import { Button, Flex, HStack, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react"
import { useEffect } from "react"
import { GoTrashcan } from "react-icons/go"
import { ProductType } from "../../@types/products"
import { useCart } from "../../hooks/useCart"
import { useInputControl } from "../../hooks/useInputControl"

interface Props {
  item: ProductType
}

export function PaymentWidgetQuantityControl({ item }: Props) {
  const {
    count,
    decrement,
    icrement,
    setCount,
    handeleCartControl,
    deleteItem
  } = useInputControl({ defaultNum: item.quantity })

  const {
    setCart,
  } = useCart()

  function handleCart() {
    const newProduct: ProductType = {
      picture: item.picture,
      title: item.title,
      price: item.price,
      totalPrice: (item.price * count),
      productRef: item.productRef,
      quantity: count
    }
    setCart(prev => handeleCartControl({
      array: prev,
      newProduct,
      willDelete: count < 1
    }))
  }

  useEffect(() => handleCart(), [count])

  const handleDeleteItem = (): void => setCart(prev => deleteItem(prev, item.productRef)) 

  return (
    <Flex>
      <HStack mt='8px'>
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
      </HStack>
      <Button
        aria-label='Add to cart'
        size='sm'
        mt='8px'
        fontWeight={'300'}
        ml='2'
        leftIcon={<GoTrashcan fill='#4B2995' />}
        bg='#E6E5E5'
        onClick={handleDeleteItem}
      >
        REMOVE
      </Button>
    </Flex>

  )
}
