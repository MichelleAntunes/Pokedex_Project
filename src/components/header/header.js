import { Flex, Button, Image } from "@chakra-ui/react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import image from "../../assets/image.png";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { goHome, goToPokedex } from "../../routes/cordinator";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const renderHeader = () => {
    switch (true) {
      case location.pathname === "/":
        return (
          <Flex justifyContent={"space-around"} alignItems={"center"}>
            <Image src={image} alt="image logo pokemon" />
            <Button
              w={"16rem"}
              h={"4rem"}
              br={"2rem"}
              bg={"#33A4F5"}
              color={"white"}
              onClick={() => {
                goToPokedex(navigate);
              }}
            >
              Pokédex
            </Button>
          </Flex>
        );

      case location.pathname.indexOf("details") > -1:
        return (
          <Flex justifyContent={"space-around"} alignItems={"center"}>
            <Button
              w={"16rem"}
              h={"4rem"}
              br={"2rem"}
              bg={"none"}
              fontSize={"1.5rem"}
              as={"u"}
              onClick={() => {
                goHome(navigate);
              }}
            >
              <ChevronLeftIcon />
              All Pokemons
            </Button>
            <Image src={image} alt="image logo pokemon" />
          </Flex>
        );

      case location.pathname.indexOf("pokedex") > -1:
        return (
          <Flex justifyContent={"space-around"} alignItems={"center"}>
            <Button
              w={"16rem"}
              h={"4rem"}
              br={"2rem"}
              bg={"none"}
              fontSize={"1.5rem"}
              as={"u"}
              onClick={() => {
                goHome(navigate);
              }}
            >
              <ChevronLeftIcon />
              All Pokemons
            </Button>
            <Image src={image} alt="image logo pokemon" />
          </Flex>
        );
      default:
        return console.log("error on header");
    }
  };
  return <>{renderHeader()}</>;
}

export default Header;
