import { Flex } from "@chakra-ui/react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { PaymentForm } from "./PaymentForm";
import { PaymentOptions } from "./PaymentOptions";
import { PaymentWidget } from "./PaymentWidget";

export function Payment() {
  const { width } = useWindowSize()

  const isSmallerThan1336px = width && width < 1336

  return (
    <Flex
      justify={isSmallerThan1336px ? "center" : 'space-between'}
      flexDir={"column"}
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
