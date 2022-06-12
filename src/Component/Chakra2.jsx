import {
  Box,
  Container,
  Center,
  SimpleGrid,
  Grid,
  GridItem,
  Flex,
  Text,
  Stack,
} from "@chakra-ui/react";
export const Chakra2 = () => {
  return (
    <div className="App">
      <Box>
      </Box>
      <Center>
        <Box>
          <Grid
            color={"white"}
            mt="50px"
            w={["200px", "500px"]}
            h="200px"
            templateRows="repeat(3, 1fr)"
            templateColumns="repeat(3, 1fr)"
            gap={4}
          >
            <GridItem rowSpan={[1, 2]} colSpan={[3, 2]} bg="#a186bd" />
            <GridItem rowSpan={[1, 3]} colSpan={[3, 1]} bg="#f26c4f" />
            <GridItem rowSpan={[1, 1]} colSpan={[3, 2]} bg="#6dcff6" />
          </Grid>
        </Box>
      </Center>
    </div>
  );
}