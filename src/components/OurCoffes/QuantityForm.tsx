import { Button, HStack, IconButton, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react"
import { IoMdCart } from "react-icons/io"
import { useInputControl } from "../../hooks/useInputControl"

export function QuantityForm() {
  const {
    count,
    decrement,
    icrement,
    setCount
  } = useInputControl({ defaultNum: 1 })

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
      />
    </HStack>
  )
}
