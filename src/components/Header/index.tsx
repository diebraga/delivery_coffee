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
        <Link to='/cart'>
          <IconButton
            aria-label='Cart'
            icon={<IoMdCart
              fill='#C05621'
            />}
            size='sm'
            bg='yellow.100'
          />
        </Link>
      </Flex>
    </Flex>
  )
}
