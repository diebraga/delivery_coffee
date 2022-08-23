import { Flex, Heading, Image, Tag, HStack, Text } from "@chakra-ui/react";
import { QuantityForm } from "./QuantityForm";

interface Tags {
  label: string
}

interface Props {
  imageSrc: string
  tags: Tags[]
  title: string
  content: string
  price: string
}

export function CoffeeCard({ imageSrc, tags, content, title, price }: Props) {
  return (
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
          src={imageSrc}
        />
        <HStack
          spacing={'1'}
          mt='2'
        >
          {tags.map((tag) => {
            return (
              <Tag
                size='sm'
                bg='#F1E9C9'
                color={'#C47F17'}
                fontSize='0.7rem'
                key={tag.label}
              >
                {tag.label}
              </Tag>
            )
          })}
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
          {title}
        </Heading>
        <Text
          fontSize={'0.8rem'}
          color='#8D8686'
        >
          {content}
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
            {price}
          </Text>
        </Flex>
        <Flex>
          <QuantityForm />
        </Flex>
      </Flex>
    </Flex>)
}
