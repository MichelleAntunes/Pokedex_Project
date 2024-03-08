import {
  ChakraProvider,
  Flex,
  Image,
  Text,
  Button,
  Grid,
  GridItem,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PokemonContext } from "../../context/pokemonContext";
import wing from "../../assets/wing.png";
import { goToDetails } from "../../routes/cordinator";
import theme from "../../theme/theme";
import { AddModal } from "../modal/Modal";

function PokemonCard({ pokemons, img, bg }) {
  const location = useLocation();
  const { addToPokedex, removeFromPokedex } = useContext(PokemonContext);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider theme={theme} resetCSS>
      <Grid
        bg={bg}
        templateColumns="repeat(5, 1fr)"
        templateRows="repeat(6, 1fr)"
        w="28rem"
        h="12rem"
        borderRadius="0.5rem"
        p={"1rem"}
        m={"1rem"}
        color="white"
      >
        <GridItem
          display={"flex"}
          flexDirection={"column"}
          h={"4rem"}
          rowSpan={2}
          colSpan={3}
          justifyContent={"center"}
        >
          <Text fontSize="2xl">#{pokemons.data.id}</Text>
          <Text
            fontFamily={theme}
            textTransform="capitalize"
            as={"b"}
            fontSize={"25px"}
          >
            {pokemons.data.name}
          </Text>
        </GridItem>

        <GridItem rowSpan={4} colSpan={2} w={"16rem"}>
          <Image
            mt={"-3rem"}
            ml={"3rem"}
            h={"10rem"}
            w={"12rem"}
            zIndex={1}
            position={"absolute"}
            src={pokemons.data.sprites.other.dream_world.front_default}
            alt={pokemons.data.name}
          ></Image>
          <Image
            mt={"-1rem"}
            rowSpan={4}
            colSpan={2}
            h={"13rem"}
            position={"relative"}
            src={wing}
          ></Image>
        </GridItem>
        <GridItem rowSpan={2} colSpan={3}>
          <Flex w={"12rem"} gap={"1rem"}>
            <img src={img} alt="img" />
          </Flex>
        </GridItem>
        <GridItem rowSpan={2} colSpan={5} fontSize="2xl" h={"3rem"}>
          <Flex m={"3"} justifyContent={"space-between"} alignItems={"center"}>
            <Text as={"u"}>
              <a
                onClick={() => {
                  goToDetails(navigate, pokemons.data.id);
                }}
              >
                Details
              </a>
            </Text>

            <Box>
              {location.pathname === "/" ? (
                <Button
                  w={"8rem"}
                  bg={"white"}
                  color={"black"}
                  onClick={() =>
                    addToPokedex(pokemons, onOpen, onClose, pokemons.data.id)
                  }
                >
                  Capture!{" "}
                </Button>
              ) : (
                <Button
                  w={"8rem"}
                  bg={"#FF6262"}
                  color={"white"}
                  onClick={() => removeFromPokedex(pokemons, onOpen, onClose)}
                >
                  Delete
                </Button>
              )}
              <AddModal
                pokemon={pokemons.data.id}
                isOpen={isOpen}
                onClose={onClose}
              />
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}
export default PokemonCard;
