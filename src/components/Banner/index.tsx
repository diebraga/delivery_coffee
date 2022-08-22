import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import BannerImg from "../../assets/banner.png";
import { IoMdCart } from "react-icons/io";
import { VscPackage } from "react-icons/vsc";
import { FaCoffee } from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";
import { IconContainter } from "./IconContainter";

export function Banner() {
  return (
    <Flex
      h='544px'
      align={'center'}
      justify='space-between'
    >
      <Box>
        <Box
          maxW='588px'
          mr='4'
        >
          <Heading
            fontWeight={'800'}
          >
            Find your favourite coffee where you are at any time!
          </Heading>
          <Text
            mt='4'
            mr='8'
            fontWeight={'400'}
          >
            With coffee delivery you can get your favourite coffee, where you are, at anytime of the day!
          </Text>
        </Box>

        <Box>
          <SimpleGrid columns={[1, 1, 2]} maxW={'567px'} spacing='3' mt='10'>
            <Flex height='80px' flexDir={'column'}>
              <Flex alignItems={'center'}>
                <IconContainter icon={<IoMdCart fill='white' />} bg='#C47F17' />
                <Text
                  as='span'
                  fontSize={'0.9rem'}
                  ml='1.5'
                >
                  Simple and secure transactions.
                </Text>
              </Flex>

              <Flex alignItems={'center'} mt='3'>
                <IconContainter icon={<AiFillClockCircle fill='white' />} bg='#DBAC2C' />
                <Text
                  as='span'
                  fontSize={'0.9rem'}
                  ml='1.5'
                >
                  Fast and tracked delivery.
                </Text>
              </Flex>
            </Flex>

            <Flex height='80px' flexDir={'column'}>
              <Flex alignItems={'center'}>
                <IconContainter icon={<VscPackage fill='white' />} bg='#574F4D' />
                <Text
                  as='span'
                  fontSize={'0.9rem'}
                  ml='1.5'
                >
                  Pack keeps the coffee intact.
                </Text>
              </Flex>

              <Flex alignItems={'center'} mt='3'>
                <IconContainter icon={<FaCoffee fill='white' />} bg='#8047F8' />
                <Text
                  as='span'
                  fontSize={'0.9rem'}
                  ml='1.5'
                >
                  The coffee comes fresh for you.
                </Text>
              </Flex>
            </Flex>
          </SimpleGrid>
        </Box>
      </Box>

      <Flex
        w={["476px"]}
        h={["360px"]}
        alignItems='center'
      >
        {/* Foto */}
        <Image
          src={BannerImg}
          objectFit='cover'
        />
      </Flex>
    </Flex>
  )
}
