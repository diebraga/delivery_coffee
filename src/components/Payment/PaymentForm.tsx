import { Box, Flex, Heading } from "@chakra-ui/react";

export function PaymentForm() {
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
        w={["100%", "100%", "100%", "640px"]}
        bg='#F3F2F2'
        h='372px'
        borderRadius={'6px'}
      >


      </Flex>
    </Box>
  )
}
