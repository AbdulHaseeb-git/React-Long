import { Container,Flex } from "@chakra-ui/react"

import Details from "./components/Details"
import Cart from "./components/Cart"

function App() {

  return (
    <Container maxW={"container.xl"}>
      <Flex columnGap={10} 
      h={{
          base:'auto',
          md:'100vh'
      }}
      direction={{base:'column-reverse',md:'row'}} pt={'5px'}  
      >
        <Details/>

{/* cart section  */}

        <Cart/>
      </Flex>

    </Container>
  )
}

export default App
