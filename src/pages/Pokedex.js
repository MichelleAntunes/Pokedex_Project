import React, { useContext } from "react";
import Header from "../components/header/header";
import PokemonCard from "../components/PokemonCard/pokemonCard";
import { PokemonContext } from "../context/pokemonContext";
import theme from "../theme/theme";
import { ChakraProvider, Heading, Flex } from "@chakra-ui/react";
import EmptyPokedex from "../components/emptyPodekex/emptyPokedex";

function Poke() {
  const { pokedex, grass, fire, bug, normal, water } =
    useContext(PokemonContext);

  return (
    <ChakraProvider>
      <Header />
      <Heading color={"white"} bg={"#5d5d5d"} p={"2rem"} fontSize={"4xl"}>
        Details
      </Heading>
      <Flex
        justifyContent="center"
        mb={"200px"}
        wrap="wrap"
        bg="#5d5d5d"
        theme={theme}
        alignItems={"center"}
      >
        {pokedex.length === 0 ? (
          <EmptyPokedex />
        ) : (
          pokedex.map((pokemons) => (
            <>
              {pokemons.data.types.map((types) => {
                switch (types.type.name) {
                  case "grass":
                    return (
                      <PokemonCard
                        bg={"#729F92"}
                        img={grass}
                        key={pokemons.data.id}
                        pokemons={pokemons}
                      />
                    );
                  case "fire":
                    return (
                      <PokemonCard
                        bg={"#EAAB7D"}
                        img={fire}
                        key={pokemons.data.id}
                        pokemons={pokemons}
                      />
                    );
                  case "bug":
                    return (
                      <PokemonCard
                        bg={"#76A866"}
                        img={bug}
                        key={pokemons.data.id}
                        pokemons={pokemons}
                      />
                    );
                  case "normal":
                    return (
                      <PokemonCard
                        bg={"#BF9762"}
                        img={normal}
                        key={pokemons.data.id}
                        pokemons={pokemons}
                      />
                    );
                  case "water":
                    return (
                      <PokemonCard
                        bg={"#71C3FF"}
                        img={water}
                        key={pokemons.data.id}
                        pokemons={pokemons}
                      />
                    );
                  default:
                    return null;
                }
              })}
            </>
          ))
        )}
      </Flex>
    </ChakraProvider>
  );
}

export default Poke;
