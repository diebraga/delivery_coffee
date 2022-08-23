import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { RiBankLine } from "react-icons/ri";
import { CgCreditCard } from "react-icons/cg";
import { BsCash, BsCurrencyDollar } from "react-icons/bs";

export function PaymentOptions() {
  return (
    <Flex
      flexDir={'column'}
      w={["100%", "100%", "100%", "640px"]}
      bg='#F3F2F2'
      h='207px'
      mt='5'
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
            <BsCurrencyDollar fill='#4B2995' size={25} />
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

        <HStack
          justify={'space-between'}
          spacing='5'
          mt='8'
        >
          <OptionBox content="CREDIT CARD" CustomIcon={CgCreditCard} />
          <OptionBox content="DEBIT CARD" CustomIcon={RiBankLine} />
          <OptionBox content="CASH" CustomIcon={BsCash} />
        </HStack>
      </Flex>
    </Flex>
  )
}

function OptionBox({ content, CustomIcon }: { content: string, CustomIcon: IconType }) {
  return (
    <Flex
      borderRadius={'6px'}
      bg='#E6E5E5'
      h='61px'
      w='100%'
      fontSize={['0.8rem', '0.8rem', '1rem']}
      textAlign='center'
      alignItems={'center'}
      justify='center'
      color='#574F4D'
      cursor={'pointer'}
    >
      <Text>
        <Icon as={CustomIcon} mr='2' color='#4B2995' />{content}
      </Text>
    </Flex>
  )
}
