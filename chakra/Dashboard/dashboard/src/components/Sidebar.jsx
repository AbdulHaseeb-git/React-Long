import { Box, HStack, Heading, Image, Tab, TabList, Tabs, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import Logo from '../assets/images/logo.png'
import { SidebarData } from '../data/Data'
import { LiaSignOutAltSolid } from "react-icons/lia";

const Sidebar = () => {
let [selected, setSelected] = useState(SidebarData[0].key);

const handleTabChange =(key)=>{
    setSelected(key);
    console.log(selected)
}



  return (
    <VStack py={['.5rem','.8rem','2rem']} spacing={10} justify={'space-between'} h={'100%'} w={'100%'}>
        <HStack w={'full'} justify={'center'}>
            <Image src={Logo} w={'2vw'} />
            <Heading size={'lg'}>Sh<Box as='span' color={'pink'}>o</Box>ps</Heading>
        </HStack>
        <VStack h={'70%'} w={'full'} overflow={'hidden'}>
            <Tabs w={'full'} h={'100%'} >
                <TabList h={"full"} justifyContent={'space-between'}  flexDirection={'column'}>
                   {SidebarData.map((item)=>(
                        <Tab key={item.key} mb={"10px"} minH={'48px'}
                        transition={"all 500ms ease"} onClick={()=>handleTabChange(item.key)}
                        _selected={
                            
                            { bg: 'pink', color: 'white', rounded:'10px', ml:0 }} 
                        w={'full'} justifyContent={'flex-start'} gap={'1vw'} px={5} py={2} ml={'2rem'} position={'relative'}
                        top={0} right={0}
                        _before={{
                            content:`""`,
                            position:'absolute',
                            top:0,left:0,
                            minH:'48px',w:"8px",
                            bg: selected=== item.key?"red":"transparent"
                        }}
                        _hover={{cursor:"pointer"}}
                        >


                            <Box ><item.icon/></Box>
                            <Text textAlign={'right'} fontWeight={'bold'}>{item.heading}</Text>
                        </Tab>
                )
            )}
                </TabList>
            </Tabs>
    </VStack>
        <HStack textAlign={'left'} w={'full'} pl={'10%'}>
            <Box cursor={'pointer'}><LiaSignOutAltSolid fontSize={'40px'}/></Box>
        </HStack>
    </VStack>
  )
}

export default Sidebar;
