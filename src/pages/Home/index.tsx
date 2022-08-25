import { Flex } from "@chakra-ui/react";
import { Banner } from "../../components/Banner";
import { OurCoffes } from "../../components/OurCoffes";

export function Home() {
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
        <Banner />
        <OurCoffes />
      </Flex>
    </Flex>
  )
}
