import { Box, Flex, Heading } from "@chakra-ui/react";
import { PaymentWidgetFooter } from "./PaymentWidgetFooter";
import { PaymentWidgetItem } from "./PaymentWidgetItem";

export function PaymentWidget() {
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
          h='437px'
          overflow={'scroll'}
          borderTopRightRadius='44px'
        >
          <PaymentWidgetItem />
          <PaymentWidgetItem />
          <PaymentWidgetItem />
          <PaymentWidgetItem />
        </Flex>

        <PaymentWidgetFooter />
      </Flex>
    </Flex>
  )
}
