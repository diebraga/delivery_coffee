import { Flex } from "@chakra-ui/react"
import { Banner } from "./components/Banner"
import { Header } from "./components/Header"

function App() {
  return (
    <Flex
      flexDir={'column'}
      justify={'center'}
      alignItems='center'
    >
      <Flex
        w='100%'
        maxW='1000px'
        flexDir={'column'}
        p='5'
      >
        <Header />
        <Banner />
      </Flex>
    </Flex>
  )
}

export default App
