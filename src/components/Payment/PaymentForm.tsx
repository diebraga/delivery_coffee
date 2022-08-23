import { Box, Flex, Heading } from "@chakra-ui/react";
import { useWindowSize } from "../../hooks/useWindowSize";

export function PaymentForm() {
  const { width } = useWindowSize()

  const isSmallerThan1336px = width && width < 1336

  return (
    <Box>
      <Heading
        as='h2'
        fontSize={'1.1rem'}
        mb='3'
        ml='1'
      >
        Complete your order
      </Heading>

      <Flex
        flexDir={'column'}
        w={isSmallerThan1336px ? "100%" : '640px'}
        bg='#F3F2F2'
        h='372px'
      >


      </Flex>
    </Box>
  )
}
