import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props {
  icon: ReactNode,
  bg: string
}

export function IconContainter({ icon, bg }: Props) {
  return (
    <Flex
      as='span'
      h='32px'
      w='32px'
      align={'center'}
      justify='center'
      borderRadius={'full'}
      bg={bg}
    >
      {icon}
    </Flex>
  )
}
