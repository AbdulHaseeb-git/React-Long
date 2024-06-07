import { Button, Checkbox, FormControl, FormLabel, GridItem, Heading, Input, Select, SimpleGrid, Text, Textarea, VStack } from "@chakra-ui/react";

const Details =()=>{
    const handleForm = (e)=>{
        e.preventDefault();
        alert("prevented");
    }
    return(
        <VStack w="full" h="full" align={"flex-start"} pt={'10px'}>
        <VStack  align={"flex-start"}>
          <Heading>Your Details</Heading>
          <Text>If you have an account, Please login.</Text>
        </VStack>
        <SimpleGrid w={'full'}
        columns={2} gap={2}>
            <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>First Name:</FormLabel>
                  <Input placeholder="Enter your name..."></Input>
                </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>Last Name:</FormLabel>
                  <Input placeholder="Enter your last name..."></Input>
                </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Address:</FormLabel>
                <Textarea resize={"none"} placeholder="Enter your address..."></Textarea>
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>City:</FormLabel>
                  <Input placeholder="Enter your city..."></Input>
                </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>Country:</FormLabel>
                  <Select placeholder="Select Country">
                    <option value="pk">Pakistan</option>
                    <option value="ch">China</option>
                    <option value="us">America</option>
                    <option value="eng">England</option>
                  </Select>
                </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <Checkbox>Confirm and click on place order</Checkbox>
            </GridItem>
            <GridItem colSpan={2}>
              <Button type="submit" variant={"primary"}   w={'full'} onClick={handleForm}>Place Order</Button>
            </GridItem>
        </SimpleGrid>

      </VStack>


    )
}

export default Details;