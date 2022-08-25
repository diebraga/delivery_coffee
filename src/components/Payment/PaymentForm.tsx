import { Box, Flex, FormControl, FormErrorMessage, Heading, Input, Text } from "@chakra-ui/react";
import { VscLocation } from "react-icons/vsc";
import { useCart } from "../../hooks/useCart";

export function PaymentForm() {
  const {
    register,
    errors
  } = useCart()
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
        h='382px'
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
              {...register("eircode", {
                required: "This is a required field",
                maxLength: 50
              })}
              isInvalid={!!errors.eircode}
            />
            {errors.eircode && (
              <Text fontSize={'xs'} color='red.400'>{errors.eircode.message}</Text>
            )}
            <Input
              placeholder="Address"
              mt='4'
              variant={'filled'}
              focusBorderColor='#4B2995'
              bg='#E6E5E5'
              {...register("address", {
                required: "This is a required field",
                maxLength: 50
              })}
              isInvalid={!!errors.address}
            />
            {errors.address && (
              <Text fontSize={'xs'} color='red.400'>{errors.address.message}</Text>
            )}
            <Flex mt='4'>
              <Box>
                <Input
                  placeholder="Apt num."
                  maxW='200px'
                  variant={'filled'}
                  focusBorderColor='#4B2995'
                  bg='#E6E5E5'
                  isInvalid={!!errors.apt}
                  {...register("apt", {
                    maxLength: {
                      value: 5,
                      message: "Max length reached"
                    }
                  })}
                />
                {errors.apt && (
                  <Text fontSize={'xs'} color='red.400'>{errors.apt.message}</Text>
                )}
              </Box>
              <Box>
                <Input
                  placeholder="City"
                  ml='4'
                  variant={'filled'}
                  focusBorderColor='#4B2995'
                  bg='#E6E5E5'
                  isInvalid={!!errors.city}
                  {...register("city", {
                    required: "This is a required field",
                    maxLength: {
                      value: 50,
                      message: "Max length reached"
                    }
                  })}
                />
                {errors.city && (
                  <Text fontSize={'xs'} color='red.400'>{errors.city.message}</Text>
                )}
              </Box>
            </Flex>
            <Flex justify={'right'}>
              <Input
                placeholder="County"
                maxW='200px'
                variant={'filled'}
                focusBorderColor='#4B2995'
                bg='#E6E5E5'
                mt='4'
                isInvalid={!!errors.county}
                {...register("county", {
                  maxLength: {
                    value: 50,
                    message: "Max length reached"
                  }
                })}
              />
              {errors.county && (
                <Text fontSize={'xs'} color='red.400'>{errors.county.message}</Text>
              )}
          </Flex>
          </FormControl>
        </Flex>
      </Flex>
    </Box>
  )
}
