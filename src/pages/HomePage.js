import React from "react";
import Header from "../components/header/header";
import { ChakraProvider, Heading, Flex } from "@chakra-ui/react";
import { useContext } from "react";
import theme from "../theme/theme";
import { PokemonContext } from "../context/pokemonContext";

import PokemonCard from "../components/PokemonCard/pokemonCard";

function Home() {
  const { pokemon, grass, fire, bug, normal, pokedex, water } =
    useContext(PokemonContext);

  const filteredPokelist = () =>
    pokemon.filter(
      (pokemonInList) =>
        !pokedex.find(
          (pokemonInPokedex) =>
            pokemonInList.data.name === pokemonInPokedex.data.name
        )
    );

  return (
    <ChakraProvider>
      <Header />
      <Heading color={"white"} bg={"#5d5d5d"} p={"2rem"} fontSize={"4xl"}>
        All Pokémon{" "}
      </Heading>
      <Flex
        justifyContent="center"
        gap="16px"
        wrap="wrap"
        bg="#5d5d5d"
        theme={theme}
      >
        {filteredPokelist().map((pokemons) => (
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
                  return console.log("error on Home Page");
              }
            })}
          </>
        ))}
      </Flex>
    </ChakraProvider>
  );
}

export default Home;
