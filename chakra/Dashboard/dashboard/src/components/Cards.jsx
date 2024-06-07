import { Flex } from "@chakra-ui/react"
import MyCard from "./MyCard"
import { CardData } from "../data/Data"


const Cards = ()=>{
    return(
        <Flex position={"relative"} justify={"space-between"} gap={5} h={'20%'} w={'full'} >
{CardData.map((data,index)=>(
    <MyCard data={data} key={index}/>
))}
</Flex>

    )
}

export default Cards;