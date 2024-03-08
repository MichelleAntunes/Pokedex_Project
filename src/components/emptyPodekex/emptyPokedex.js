import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

function EmptyPokedex() {
  return (
    <Box textAlign="center" mt={10} h="50vh">
      <Heading color="white" fontSize="3xl" mb={4}>
        Your Pokédex is Empty!
      </Heading>

      <Text color="white" fontSize="xl">
        Looks like you haven't caught any Pokémon yet.
      </Text>
      <Text color="white" fontSize="xl">
        Get out there and start your adventure!
      </Text>
    </Box>
  );
}

export default EmptyPokedex;
