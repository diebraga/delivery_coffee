import { Flex, Heading, Wrap, WrapItem, Image, Tag, HStack, Text } from "@chakra-ui/react";
import Cafe from '../../assets/coffee/cold_espresso.png'
import { QuantityForm } from "./QuantityForm";

export function OurCoffes() {
  return (
    <Flex
      flexDir={'column'}
    >
      <Heading
        as='h2'
        fontWeight={'800'}
        fontSize={['1.4rem', '1.5rem', '1.7rem']}
      >
        Our Coffee
      </Heading>
      <Wrap spacing='30px' flex='1' mt='49px'>
        <WrapItem>
          <Flex
            w='16rem'
            h='19.375rem'
            bg='#F3F2F2'
            borderLeftRadius={'6px'}
            borderRightRadius='36px'
            borderBottomLeftRadius={'36px'}
            borderBottomRightRadius='6px'
            position={'relative'}
            alignItems='center'
            justify={'center'}
            mt='5'
            flexDir={'column'}
          >
            <Flex
              position='absolute'
              top='-1'
              left={'68px'}
              w={['120px']}
              h={['120px']}
              alignItems='center'
              justify={'center'}
              flexDir='column'
            >
              <Image
                src={Cafe}
              />
              <HStack
                spacing={'1'}
                mt='2'
              >
                <Tag
                  size='sm'
                  bg='#F1E9C9'
                  color={'#C47F17'}
                  fontSize='0.7rem'
                >
                  Traditional
                </Tag>
                <Tag
                  size='sm'
                  bg='#F1E9C9'
                  color={'#C47F17'}
                  fontSize='0.7rem'
                >
                  Cold
                </Tag>
              </HStack>
            </Flex>
            <Flex
              flexDir={'column'}
              justify='center'
              w='80%'
              textAlign={'center'}
              mt='9'
            >
              <Heading
                as='h3'
                fontWeight={'700'}
                fontSize='1.1rem'
                p='2'
              >
                Cold Espresso
              </Heading>
              <Text
                fontSize={'0.8rem'}
                color='#8D8686'
              >
                Delicious coffee espresso drink made with ice.
              </Text>
            </Flex>
            <Flex
              position={'absolute'}
              bottom='3'
              justify={'space-between'}
              w='80%'
            >
              <Flex position={'relative'} pl='3'>
                <Text
                  as='span'
                  position={'absolute'}
                  bottom='0.5'
                  left='0'
                >
                  €
                </Text>
                <Text
                  as='span'
                  fontWeight={'800'}
                  fontSize='1.3rem'
                >
                  9.90
                </Text>
              </Flex>
              <Flex>
                <QuantityForm />
              </Flex>
            </Flex>
          </Flex>
        </WrapItem>
        <WrapItem>
          <Flex w='180px' h='80px' bg='green.200'>
            Box 2
          </Flex>
        </WrapItem>
        <WrapItem>
          <Flex w='180px' h='80px' bg='tomato'>
            Box 3
          </Flex>
        </WrapItem>
        <WrapItem>
          <Flex w='180px' h='80px' bg='blue.200'>
            Box 4
          </Flex>
        </WrapItem>
        <WrapItem>
          <Flex w='180px' h='80px' bg='blackAlpha.500'>
            Box 5
          </Flex>
        </WrapItem>
      </Wrap>
    </Flex>
  )
}
