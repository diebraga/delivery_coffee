import { Button, Flex } from "@chakra-ui/react";

export function PaymentWidgetFooter() {
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
          <Flex>€ 23.20</Flex>
        </Flex>

        <Flex
          justify={'space-between'}
          fontSize={['0.9rem']}
          mt='2'
        >
          <Flex>Delivery</Flex>
          <Flex>€ 3.20</Flex>
        </Flex>

        <Flex
          justify={'space-between'}
          fontWeight='700'
          fontSize={['1.1rem']}
          mt='2'
        >
          <Flex>Total</Flex>
          <Flex>€ 26.40</Flex>
        </Flex>

        <Button
          width={'100%'}
          bg='#DBAC2C'
          color='white'
          mt='3'
        >
          Confirm Payment
        </Button>
      </Flex>
    </Flex>
  )
}
