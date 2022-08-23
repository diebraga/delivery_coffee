import { Flex } from "@chakra-ui/react";
import { PaymentForm } from "./PaymentForm";
import { PaymentOptions } from "./PaymentOptions";
import { PaymentWidget } from "./PaymentWidget";

export function Payment() {
  return (
    <Flex
      justify={'space-between'}
      flexDir={['column', 'column', 'column', 'row']}
      mt='70px'
    >
      <Flex
        flexDir={'column'}
      >
        <PaymentForm />

        <PaymentOptions />
      </Flex>

      <Flex
        flexDir={'column'}
      >
        <PaymentWidget />
      </Flex>
    </Flex>
  )
}
