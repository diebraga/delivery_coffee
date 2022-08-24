import { Avatar, Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { IoMdCart } from "react-icons/io";

type Props = {
  title: string
  content: string
  color: "blue.500" | "red.500" | "green.500"
}

export function ToastNotification({ title, content, color }: Props) {
  return (
    <Flex
      maxW="sm"
      w="full"
      mx="auto"
      bg={useColorModeValue("white", "gray.800")}
      shadow="lg"
      rounded="lg"
      overflow="hidden"
    >
      <Flex w={2} bg={color}></Flex>

      <Flex alignItems="center" px={2} py={3}>
        <Flex p='2'>
          <IoMdCart size={23}/>
        </Flex>
        <Box mx={3}>
          <Text fontWeight='bold' color={useColorModeValue("gray.600", "gray.200")} fontSize='0.9rem'>
            {title}
          </Text>
          <Text fontWeight='thin' color={useColorModeValue("gray.600", "gray.200")} fontSize='0.8rem'>
            {content}
          </Text>
        </Box>
      </Flex>
    </Flex>
  )
}