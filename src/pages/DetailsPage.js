import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header/header";
import { Progress } from "@chakra-ui/react";
import {
  ChakraProvider,
  Heading,
  Text,
  Flex,
  Grid,
  GridItem,
  Box,
} from "@chakra-ui/react";

import { AddModal } from "../components/modal/Modal";

function Details() {
  const [isLoading, setIsLoading] = useState(true);
  const pathParams = useParams();
  const [details, setDetails] = useState({});

  const getPokedex = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pathParams.idPokemon}/`
      );

      setDetails(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokedex();
  }, []);

  return (
    <ChakraProvider resetCSS>
      <Header />
      <Heading color={"white"} bg={"#5d5d5d"} p={"2rem"} fontSize={"4xl"}>
        Details
      </Heading>
      <AddModal />
      {!isLoading ? (
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          bg={"#5d5d5d"}
          color={"white"}
          p={"3.1rem"}
          flexWrap={"wrap"}
        >
          <Grid
            justifyContent={"center"}
            alignItems={"center"}
            templateColumns={{ base: "1fr", md: "1fr 1fr" }}
            gap={{ base: "1rem", md: "2rem" }}
            bg={"#ECECEC"}
            borderRadius={"2rem"}
            color={"white"}
            p={"2rem"}
            maxW={"84rem"}
            w={"100%"}
          >
            <GridItem
              bg={"white"}
              color={"black"}
              borderRadius={"0.4rem"}
              p={"2rem"}
              h={"30rem"}
              w={"100%"}
              mb={{ base: "1rem", md: "0" }}
            >
              <Heading fontSize="2xl">Base stats</Heading>
              {details.stats.map((stats) => {
                let color = "";
                if (stats["base_stat"] > 50) {
                  color = "yellow";
                } else {
                  color = "orange";
                }
                return (
                  <Box key={stats.stat.name} mb={"0.5rem"}>
                    <Flex justifyContent={"space-between"}>
                      <Text>{stats.stat.name}</Text>
                      <Text>{stats.base_stat}</Text>
                    </Flex>
                    <Progress
                      colorScheme={color}
                      size="sm"
                      value={stats.base_stat}
                      mb={"0.5rem"}
                    />
                  </Box>
                );
              })}
              <Text fontWeight={"bold"}>
                Total:{" "}
                {details.stats.reduce((acc, value) => {
                  return acc + value["base_stat"];
                }, 0)}
              </Text>
            </GridItem>

            <GridItem
              bg={"white"}
              borderRadius={"1rem"}
              color={"black"}
              p={"1rem"}
              w={"100%"}
            >
              <Heading># {details.id}</Heading>
              <Heading textTransform="capitalize">{details.name}</Heading>
              <Box mt={"1rem"}>
                <Heading fontSize="2xl">Moves:</Heading>
                <Flex
                  flexWrap={"wrap"}
                  justifyContent={"flex-start"}
                  mt={"1rem"}
                >
                  {details.moves.slice(1, 5).map((item) => (
                    <Box
                      key={item.move.name}
                      borderStyle="dashed"
                      borderColor="#d2cfce"
                      borderWidth="medium"
                      borderRadius={"0.4rem"}
                      p={"0.4rem"}
                      m={"0.5rem"}
                      bg={"#ECECEC"}
                    >
                      {item.move.name}
                    </Box>
                  ))}
                </Flex>
              </Box>
            </GridItem>
          </Grid>
        </Flex>
      ) : (
        <Flex justifyContent={"center"} alignItems={"center"} h={"100vh"}>
          <Text fontSize={"2xl"}>Loading...</Text>
        </Flex>
      )}
    </ChakraProvider>
  );
}

export default Details;
