import {  CircularProgress, CircularProgressLabel, Flex, Heading, Icon, Text, VStack } from "@chakra-ui/react"
import { AnimatePresence, motion} from "framer-motion";
import { useState } from "react"


const MyCard = ({data})=>{
    let [expended, setExpended]= useState(false);
    return(
        <AnimatePresence>
        {
            expended?<ExpendedCard data={data} setExpended={()=>setExpended(false)}/> :<CompactCard data={data} setExpended={()=>setExpended(true)}/>
        }
        </AnimatePresence>
    )
}


const CompactCard =({data , setExpended})=>{
    const CompactFlex = motion(Flex);
    return(
        <CompactFlex initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{   opacity: 0 }}
        transition={{ duration: 0.5 }}
   color={'white'} cursor={"pointer"} flex={1}  bg={data.back} rounded={'10px'} justify={"space-around"}  align={"center"}
        onClick={setExpended}
        
        >
        <Flex h={'full'} direction={"column"} justify={"space-around"} align={"center"}>            
            <CircularProgress  value={data.per}
            p={'1vh'}
            style={{ boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)" }}
            trackColor="transparent" color='white'>
                <CircularProgressLabel color={'white'}>{data.per}%</CircularProgressLabel>
            </CircularProgress>
            <Heading size={'xs'} as='h4' color={"white"}>{data.title}</Heading>
        </Flex>
    
    <Flex h={'full'} direction={"column"} justify={"space-around"} align={"center"}>
        <Icon as={data.icon}/>
        <Heading size={'xs'}>${data.amount}</Heading>
        <Text fontSize={'11px'}>Last {data.hours} hours</Text>
    
    </Flex>
    </CompactFlex>
            

    )

}


const ExpendedCard=({data , setExpended})=>{
    const ExpededFlex = motion(Flex);
    return(
        <ExpededFlex initial={{ height: 0, width:0, opacity: 0 }}
        animate={{ height: "60vh", width:"100%", opacity: 1 }}
        exit={{ height: 0, width: "0",  opacity: 0 }}
        transition={{ duration: 0.5 }}

        color={"white"} position={'absolute'} top={0} left={0}  zIndex={9}
         cursor={"pointer"} bg={data.back} rounded={'10px'} justify={"space-around"}  align={"center"}
        onClick={setExpended}>
        <Flex h={'full'} direction={"column"} justify={"space-around"} align={"center"}>            
            <CircularProgress size={'200px'} value={data.per}
            p={'1vh'}
            style={{ boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)" }}
            trackColor="transparent" color='white'>
                <CircularProgressLabel color={'white'}>{data.per}%</CircularProgressLabel>
            </CircularProgress>
            <Text>Expended</Text>
            <Heading size={'lg'} as='h4' >{data.title}</Heading>
        </Flex>
    
    <Flex  h={'full'} direction={"column"} justify={"space-around"} align={"center"}>
        <Icon fontSize={'100px'} as={data.icon}/>
        <Heading size={'xl'}>${data.amount}</Heading>
        <Text fontSize={'20px'}>Last {data.hours} hours</Text>
    
    </Flex>
        </ExpededFlex>
    )
}


export default MyCard;

