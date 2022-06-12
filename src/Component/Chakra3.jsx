import { Center, Grid, GridItem } from "@chakra-ui/react";

export const Chakra3 = () => {

  return (
    <div className="App">
      <Center>
        <Grid 
        gap={5}
        templateColumns='repeat(2, 150px)'
        templateRows='repeat(4, 150px)'>

          <GridItem colSpan={1} bg='#ffc83c'>1</GridItem>
          <GridItem colSpan={1} bg='#ffc83c'>2</GridItem>
          <GridItem colSpan={2} bg='#ff3c69'>3</GridItem>
          <GridItem colSpan={2} bg='#6e7dff'>4</GridItem>
          <GridItem colSpan={2} bg='#6e7dff'>5</GridItem>

        </Grid>
      </Center>
    </div>
  );
}