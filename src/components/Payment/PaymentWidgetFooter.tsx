import { Button, Flex } from "@chakra-ui/react";
import { useCart } from "../../hooks/useCart";

export function PaymentWidgetFooter() {
  const {
    summary
  } = useCart()

  const { deliveryPrice, totalPriceEveryItem } = summary
  return (
    <Flex
      as='footer'
      flexDir={'column'}
      p='9'
      pt='3'
      position={'absolute'}
      bottom='0'
      w='100%'
      bg='#F3F2F2'
      borderBottomLeftRadius={'44px'}
      zIndex='5'
    >
      <Flex
        flexDir={'column'}
      >
        {/* Summary */}
        <Flex
          justify={'space-between'}
          fontSize={['0.9rem']}
          mt='2'
        >
          <Flex>Total Items</Flex>
          <Flex>€ {totalPriceEveryItem}</Flex>
        </Flex>

        <Flex
          justify={'space-between'}
          fontSize={['0.9rem']}
          mt='2'
        >
          <Flex>Delivery</Flex>
          <Flex>€ {deliveryPrice}</Flex>
        </Flex>

        <Flex
          justify={'space-between'}
          fontWeight='700'
          fontSize={['1.1rem']}
          mt='2'
        >
          <Flex>Total</Flex>
          <Flex>€ {totalPriceEveryItem + deliveryPrice}</Flex>
        </Flex>

        <Button
          width={'100%'}
          bg='#DBAC2C'
          color='white'
          mt='3'
          type="submit"
        >
          Confirm Payment
        </Button>
      </Flex>
    </Flex>
  )
}
