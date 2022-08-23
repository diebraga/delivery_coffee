import { Box, Flex } from "@chakra-ui/react";
import { PaymentWidgetFooter } from "./PaymentWidgetFooter";
import { PaymentWidgetItem } from "./PaymentWidgetItem";

export function PaymentWidget() {
  return (
    <Box>
      <Flex
        maxW='448px'
        w='488px'
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
    </Box>
  )
}
