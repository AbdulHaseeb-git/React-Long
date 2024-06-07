import { AspectRatio, Button, Divider, HStack, Heading, Image,  Text,  VStack, useColorMode, useColorModeValue } from "@chakra-ui/react"


const Cart =()=>{

    const {toggleColorMode}= useColorMode();
    const bgColor = useColorModeValue('gray.500','whiteAlpha.50');
    return(
        <VStack w="full" h="full" bg={bgColor} pt={'10px'} alignItems={'flex-start'} px={'50px'}>
        <VStack align={"flex-start"} w={'full'}>
            <Heading>Your Cart</Heading>
            <Text>If you want other color Scheme then...</Text>
            <Button size={'lg'} onClick={toggleColorMode} variant={'outline'} colorScheme="black">Try Changing Theme</Button>
          </VStack>
          <HStack align={'center'} w={'full'} justify={'space-between'}>
            <AspectRatio w={24} ratio={1}
            >
            <Image src="https://static-01.daraz.pk/p/d447e6f8e9e0d70a6c0820f1683b4ddb.jpg_300x0q75.webp" alt="Skateboad"/>
            </AspectRatio>
            <VStack>
            <Heading size={'md'}>Skate Board</Heading>
            <Text color={'gray'}>gcd3354xsrr</Text>
            </VStack>
            <Text textAlign={'left'} fontWeight={'bold'} w={'50px'}>$119</Text>
          </HStack>
          <HStack w={'full'} justify={'space-between'} >
            <Heading size={'sm'}>Subtotal</Heading>
            <Text textAlign={'left'} w={'50px'}>$119</Text>
          </HStack>
          <HStack w={'full'} justify={'space-between'} >
            <Heading size={'sm'}>Shipping</Heading>
            <Text textAlign={'left'}  w={'50px'}>$11</Text>
          </HStack>
          <HStack w={'full'} justify={'space-between'} >
            <Heading size={'sm'}>Taxes</Heading>
            <Text textAlign={'left'}  w={'50px'}>$19</Text>
          </HStack>
          <Divider/>
          <HStack w={'full'} justify={'space-between'} >
            <Heading size={'md'}>Total</Heading>
            <Text textAlign={'start'} fontWeight={'bold'} w={'50px'}>$149</Text>
          </HStack>

        </VStack>

    )
}

export default Cart;