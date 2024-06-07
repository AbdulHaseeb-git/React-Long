import { Box, Flex, Heading} from "@chakra-ui/react"
import Cards from "./Cards"
import MyTable from "./MyTable"

const CenterBar=()=>{
    return(
        <Flex p={"1vh"} h={'full'} direction={'column'} justify={"space-between"} align={'flex-start'}>

            <Heading>Dashboard</Heading>
            <Cards/>
            
            <Heading size={'sm'}>Recent Orders</Heading>
             
            <Box  h={'50%'} w={'full'} mb={"10px"} >
                <MyTable h={"full"} w={'full'}/>
            </Box>

        </Flex>
    )
}
export default CenterBar