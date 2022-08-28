import { Button, CloseButton, Flex, HStack, Image, Text, useDisclosure } from "@chakra-ui/react";
import { useCart } from "../../hooks/useCart";
import { HiLocationMarker } from "react-icons/hi";
import { IconType } from "react-icons";
import { AiFillClockCircle } from "react-icons/ai";
import DeliveryMan from '../../assets/delivery_man.png'
import { BiDollar } from "react-icons/bi";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function DeliveryConfirmation() {
  const {
    summary
  } = useCart()

  const { isOpen, onToggle } = useDisclosure()
  const navigateTo = useNavigate();

  useEffect(() => {
    // if (!summary.paymentOption || !summary.delivery_info) navigateTo('/')
  }, [])

  function onBuyMore() {
    localStorage.clear()
    window.location.replace("/");
  }
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
        <Text
          as='h1'
          color="#C47F17"
          fontWeight={'800'}
          fontSize={['1.25rem', '1.5rem', '2rem']}
        >
          Yeah! your coffee is on the way
        </Text>
        <Text
          as='p'
          fontWeight={'400'}
          fontSize={['0.8rem', '1rem', '1.25rem']}
          ml='1'
          mt='3'
        >
          Now all you need to do is wait in confort of your home.
        </Text>

        <Flex
          w='100%'
          justify={'space-between'}
        >
          <Flex
            className="border"
            flexDir={'column'}
            borderLeftRadius={'6px'}
            borderBottomRightRadius={'6px'}
            borderBottomLeftRadius={"36px"}
            borderTopRightRadius={'36px'}
            maxW={'526px'}
            w='100%'
            paddingY={'40px'}
            mt='40px'
          >
            <Flex alignItems={'center'} paddingX={'9'} mb='6'>
              <DeliveryOptionIcon Icon={HiLocationMarker} color="#8047F8" />
              <Flex
                flexDir={'column'}
                fontSize={['0.8rem', '1rem']}
              >
                <Text
                  as='p'
                >
                  Delivery address <strong>{summary.delivery_info.address} {summary.delivery_info.apt}</strong>
                </Text>
                <Text
                  as='p'
                >
                  {summary.delivery_info.city} {summary.delivery_info.county} {summary.delivery_info.eircode}
                </Text>
              </Flex>
            </Flex>

            <Flex alignItems={'center'} paddingX={'9'} mb='6'>
              <DeliveryOptionIcon Icon={AiFillClockCircle} color="#DBAC2C" />
              <Flex
                flexDir={'column'}
                fontSize={['0.8rem', '1rem']}
              >
                <Text
                  as='p'
                >
                  Estimated time
                </Text>
                <Text
                  as='p'
                >
                  <strong>20 - 30 minutes</strong>

                </Text>
              </Flex>
            </Flex>

            <Flex alignItems={'center'} paddingX={'9'}>
              <DeliveryOptionIcon Icon={BiDollar} color="#C47F17" />
              <Flex
                flexDir={'column'}
                fontSize={['0.8rem', '1rem']}
              >
                <Text
                  as='p'
                >
                  Payment at arrival
                </Text>
                <Text
                  as='p'
                >
                  <strong>{summary.paymentOption}</strong>
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            w='100%'
            justify={'center'}
            alignItems='center'
            display={['none', 'none', 'block']}
          >
            <Image src={DeliveryMan} maxW='492px' maxH='293px' />
          </Flex>
        </Flex>

        <HStack
          mt='40px'
          align='center'
          justify={'center'}
          w='100%'
        >
          <Button
            w='100%'
            colorScheme={'orange'}
            onClick={onBuyMore}
          >
            Buy more
          </Button>
          <Button
            w='100%'
            colorScheme={'purple'}
            onClick={onToggle}
          >
            Summary
          </Button>
        </HStack>
        {isOpen && (
          <>
            <Flex
              color='gray.500'
              justify={'center'}
              fontSize='1rem'
              position={'absolute'}
              w='100%'
              bg='white'
              minH={'100%'}
            >
              <pre>{JSON.stringify(summary, null, 2)}</pre>
              <CloseButton size='lg' onClick={onToggle} color='red.500' />
            </Flex>
          </>
        )}
      </Flex>
    </Flex>
  )
}

function DeliveryOptionIcon({ Icon, color }: { Icon: IconType, color: string }) {
  return (
    <Flex
      bg={color}
      h='32px'
      w='32px'
      borderRadius={'full'}
      alignItems='center'
      justify={'center'}
      mr='2'
    >
      <Icon fill='white' />
    </Flex>
  )
}