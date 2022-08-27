import { Box, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { RiBankLine } from "react-icons/ri";
import { CgCreditCard } from "react-icons/cg";
import { BsCash, BsCurrencyDollar } from "react-icons/bs";
import { useCart } from "../../hooks/useCart";

export function PaymentOptions() {
  const { setPeymentOption, paymentOption } = useCart()
  const paymentOptions = [
    { id: 1, content: "CREDIT CARD", icon: CgCreditCard },
    { id: 2, content: "DEBIT CARD", icon: RiBankLine },
    { id: 3, content: "CASH", icon: BsCash },
  ]
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
          {paymentOptions.map(option => {
            const onClick = () => setPeymentOption({
              id: option.id,
              option: option.content
            })
            return <OptionBox
              content={option.content}
              CustomIcon={option.icon}
              key={option.id}
              onClick={onClick}
              isChoosen={paymentOption.option === option.content}
            />
          })}
        </HStack>
      </Flex>
    </Flex>
  )
}

function OptionBox({
  content,
  CustomIcon,
  onClick,
  isChoosen
}: {
  content: string,
  CustomIcon: IconType,
  onClick: () => void,
  isChoosen: boolean
}) {
  return (
    <Flex
      onClick={onClick}
      borderRadius={'6px'}
      h='61px'
      w='100%'
      fontSize={['0.8rem', '0.8rem', '1rem']}
      textAlign='center'
      alignItems={'center'}
      justify='center'
      color='#574F4D'
      cursor={'pointer'}
      border={isChoosen ? `1px solid #8047F8` : 'none'}
      bg={isChoosen ? "#EBE5F9" : '#E6E5E5'}
    >
      <Text>
        <Icon as={CustomIcon} mr='2' color='#4B2995' />{content}
      </Text>
    </Flex>
  )
}
