import { Flex } from "@chakra-ui/react";
import { Payment } from "../../components/Payment";

export function Cart() {
  return (
    <Flex
      flexDir={'column'}
      justify={'center'}
      alignItems='center'
    >
      <Flex
        w='100%'
        maxW='1200px'
        flexDir={'column'}
        p='5'
      >
        <Payment />
      </Flex>
    </Flex>
  )
}
