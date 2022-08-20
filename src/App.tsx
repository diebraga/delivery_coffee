import { Flex } from "@chakra-ui/react"
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
        maxW='888px'
      >
        <Header />
      </Flex>
    </Flex>
  )
}

export default App
