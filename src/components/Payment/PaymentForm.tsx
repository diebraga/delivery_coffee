import { Box, Flex, FormControl, FormLabel, Heading, Input, Text } from "@chakra-ui/react";
import { VscLocation } from "react-icons/vsc";

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
        <Flex
          flexDir={'column'}
          p='8'
        >
          <Flex>
            <Text
              as='span'
            >
              <VscLocation fill='#C47F17' size={28} />
            </Text>
            <Box>
              <Text
                as='h5'
                color='#403937'
                ml='2'
              >
                Payment
              </Text>
              <Text
                as='p'
                color='#574F4D'
                ml='2'
                fontSize={['0.8rem']}
              >
                The payment is made at the delivery point, Choose your payment method.
              </Text>
            </Box>
          </Flex>

          <FormControl>
            <Input
              maxW='200px'
              placeholder="Eircode"
              mt='8'
              variant={'filled'}
              focusBorderColor='#4B2995'
              bg='#E6E5E5'
            />
            <Input
              placeholder="Address"
              mt='4'
              variant={'filled'}
              focusBorderColor='#4B2995'
              bg='#E6E5E5'
            />
            <Flex mt='4'>
              <Input
                placeholder="Apt num."
                maxW='200px'
                variant={'filled'}
                focusBorderColor='#4B2995'
                bg='#E6E5E5'
              />
              <Input
                placeholder="City"
                ml='4'
                variant={'filled'}
                focusBorderColor='#4B2995'
                bg='#E6E5E5'
              />
            </Flex>
            <Flex justify={'right'}>
              <Input
                placeholder="County"
                maxW='200px'
                variant={'filled'}
                focusBorderColor='#4B2995'
                bg='#E6E5E5'
                mt='4'
              />
            </Flex>
          </FormControl>
        </Flex>
      </Flex>
    </Box>
  )
}
