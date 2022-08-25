import { Flex } from "@chakra-ui/react";
import { useCart } from "../../hooks/useCart";
import { PaymentForm } from "./PaymentForm";
import { PaymentOptions } from "./PaymentOptions";
import { PaymentWidget } from "./PaymentWidget";

export function Payment() {
  const {
    handleSubmit,
    onSubmit
  } = useCart()
  return (
    <Flex
      justify={'space-between'}
      flexDir={['column', 'column', 'column', 'row']}
      mt='70px'
      as='form'
      onSubmit={handleSubmit(onSubmit)}
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
