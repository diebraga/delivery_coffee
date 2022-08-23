import { Button, Flex, HStack, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react"
import { GoTrashcan } from "react-icons/go"
import { useInputControl } from "../../hooks/useInputControl"

export function PaymentWidgetQuantityControl() {
  const {
    count,
    decrement,
    icrement,
    setCount
  } = useInputControl({ defaultNum: 1 })

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
        leftIcon={<GoTrashcan fill='#4B2995'/>}
        bg='#E6E5E5'
      >
        REMOVE
      </Button>
    </Flex>

  )
}
