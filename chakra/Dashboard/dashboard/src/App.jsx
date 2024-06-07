import {Container, Grid, GridItem} from "@chakra-ui/react"
import Sidebar from "./components/Sidebar";
import CenterBar from "./components/CenterBar";
import Rightbar from "./components/Rightbar";
import { useMemo } from "react";

function App() {
  const memoizedSidebar = useMemo(() => <Sidebar />, []);
  const memoizedCenterBar = useMemo(() => <CenterBar />, []); // No dependencies
  const memoizedRightbar = useMemo(() => <Rightbar />, []); // No dependencies

  return (
    <Container display={'grid'} placeItems={'center'} maxW={"container.2xl"} h={"100vh"}
     bgGradient='linear(to-bl, #ffe1bc, #ffcfd1 , #f3c6f1)'>
      <Grid overflow={"hidden"}  gridTemplateColumns={'11rem auto 20rem'} w={'97%'} h={'97%'} bg={'haseeb'} rounded={20} p={0}>
        <GridItem  h={"100%"}>
          {memoizedSidebar}
        </GridItem>
        <GridItem  h={"100%"}>
          {memoizedCenterBar}
        </GridItem>
        <GridItem h={"100%"}>
          {memoizedRightbar}
        </GridItem>
      </Grid>
    </Container>
  )
}

export default App;