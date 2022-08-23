import { Flex, Text, Image, Divider, Box } from "@chakra-ui/react";
import Cafe from '../../assets/coffee/cold_espresso.png'
import { PaymentWidgetQuantityControl } from "./PaymentWidgetQuantityControl";

export function PaymentWidgetItem() {
  return (
    <Flex
      flexDir={'column'}
      borderTopRightRadius={'44px'}
      zIndex='1'
    >
      <Flex
        justify={'space-between'}
        p='9'
        w='100%'
      >
        <Flex>
          <Flex>
            <Image src={Cafe} w='64px' h='64px' />

            <Flex
              ml='3'
              flexDir={'column'}
              w='100%'
            >
              <Text
                as='h4'
              >
                Cold Espresso
              </Text>

              <Flex>
                <PaymentWidgetQuantityControl />
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex>
          <Text
            as='span'
            fontWeight={'700'}
          >
            € 8.90
          </Text>
        </Flex>
      </Flex>
      <Box px='9'>
        <Divider />
      </Box>
    </Flex>
  )
}
