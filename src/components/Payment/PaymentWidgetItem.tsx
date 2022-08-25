import { Flex, Text, Image, Divider, Box } from "@chakra-ui/react";
import { PaymentWidgetQuantityControl } from "./PaymentWidgetQuantityControl";

type ProductType = {
  productRef: string
  picture: string
  title: string
  price: number
  quantity: number
}

interface Props {
  item: ProductType
}

export function PaymentWidgetItem({ item }: Props) {
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
            <Image src={item.picture} w='64px' h='64px' />

            <Flex
              ml='3'
              flexDir={'column'}
              w='100%'
            >
              <Text
                as='h4'
              >
                {item.title}
              </Text>

              <Flex>
                <PaymentWidgetQuantityControl item={item}/>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex>
          <Text
            as='span'
            fontWeight={'700'}
          >
            € {item.price}
          </Text>
        </Flex>
      </Flex>
      <Box px='9'>
        <Divider />
      </Box>
    </Flex>
  )
}
