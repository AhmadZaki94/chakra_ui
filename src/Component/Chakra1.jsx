import { Center, Grid, GridItem,} from '@chakra-ui/react';

export const Chakra1 = () => {

    return (
      <div className="App">
        <Center>
          <Grid
            w='800px'
            h='500px'
            color={"white"}
            templateColumns="repeat(4, 1fr)"
          >
            <GridItem
              rowSpan={[1, 4]}
              colSpan={[4, 1]}
            //   h="40"
              bg="#0072bb"
              p="10px"
              textAlign={"center"}
              alignItems={"center"}
            >
              Nav
            </GridItem>
            <GridItem
              rowSpan={[1, 4]}
              colSpan={[4, 2]}
            //   h="40"
              bg={["#ee1c25", "#f8931d"]}
              p="10px"
              textAlign={"center"}
            >
              Content
            </GridItem>
            <GridItem
              rowSpan={[1, 4]}
              colSpan={[4, 1]}
            //   h={["80", "40"]}
              bg={["#f8931d", "#ee1c25"]}
              p="10px"
              textAlign={"center"}
            >
              Widget
            </GridItem>
          </Grid>
        </Center>
      </div>
    );
}