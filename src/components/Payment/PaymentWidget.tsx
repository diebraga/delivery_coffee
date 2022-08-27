import { Link as ChackaLink, Flex, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { PaymentWidgetFooter } from "./PaymentWidgetFooter";
import { PaymentWidgetItem } from "./PaymentWidgetItem";

export function PaymentWidget() {
  const {
    cart
  } = useCart()

  return (
    <Flex
      flexDir={'column'}
      mt={['35px', '35px', '35px', '0']}
    >
      <Heading
        as='h2'
        fontSize={'1.1rem'}
        mb='3'
        ml='1'
      >
        Selected coffees
      </Heading>

      <Flex
        w={["100%", "100%", "100%", "448px"]}
        maxW={["100%", "100%", "100%", "448px"]}
        h='498px'
        bg='#F3F2F2'
        borderTopLeftRadius={'6px'}
        borderTopRightRadius='44px'
        borderBottomLeftRadius={'44px'}
        borderBottomRightRadius='6px'
        flexDir={'column'}
        position={'relative'}
      >
        <Flex
          flexDir={'column'}
          h='290px'
          overflowY={'scroll'}
          borderTopRightRadius='44px'
        >
          {cart.length > 0 ? cart.map(item => {
            return <PaymentWidgetItem item={item} key={item.productRef} />
          }) : (
            <Flex
              justify={'center'}
              alignItems='center'
              h='300px'
              fontSize={'md'}
              fontWeight="bold"
              flexDir={'column'}
            >
              <Text>
                Nothing in your cart yet ;)
              </Text>
              <Link to='/'>
                <ChackaLink as='p' pt='4' color='blue.400' textAlign={'center'}>
                  Buy your coffee.
                </ChackaLink>
              </Link>
            </Flex>
          )}
        </Flex>

        <PaymentWidgetFooter />
      </Flex>
    </Flex>
  )
}
