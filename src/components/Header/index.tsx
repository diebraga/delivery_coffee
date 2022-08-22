import { Box, Flex, IconButton, Text } from '@chakra-ui/react'
import Logo from '../../assets/logo.png'
import { IoMdCart } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <Flex
      height={'104px'}
      width='100%'
      alignItems={'center'}
      justify='space-between'
    >
      <Box>
        <img src={Logo} />
      </Box>
      <Flex>
        <Flex
          bg='purple.100'
          fontSize={'0.8rem'}
          borderRadius={'4px'}
          mr='2'
        >
          <Flex
            alignItems={'center'}
            textAlign='center'
            p='1'
          >
            <MdLocationPin fill='#6B46C1' />

            <Text
              as='span'
              color={'purple.600'}
              ml='1'
            >
              Limerick, IE
            </Text>
          </Flex>
        </Flex>
        <Link to='/cart' style={{
          position: 'relative',
        }}>
          <IconButton
            aria-label='Cart'
            icon={<IoMdCart
              fill='#C05621'
            />}
            size='sm'
            bg='yellow.100'
          />
          <Flex
            position={'absolute'}
            top='-2'
            right='-2'
            height='20px'
            w='20px'
            bg='#C47F17'
            color={'white'}
            textAlign='center'
            alignItems={'center'}
            justify='center'
            borderRadius='full'
            fontWeight={'bold'}
            fontSize='0.7rem'
          >
            <Text>
              2
            </Text>
          </Flex>
        </Link>
      </Flex>
    </Flex>
  )
}
