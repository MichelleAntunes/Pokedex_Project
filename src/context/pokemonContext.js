import axios from "axios";
import { createContext, useState, useEffect } from "react";
import bug from "../assets/bug.png";
import fire from "../assets/fire.png";
import grass from "../assets/grass.png";
import normal from "../assets/normal.png";
import water from "../assets/water.png";
import wings from "../assets/wings.png";

export const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [details, setDetails] = useState([]);

  const getPokemon = () => {
    let pokemonPoint = [];
    for (let i = 1; i < 22; i++) {
      pokemonPoint.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios
      .all(pokemonPoint.map((element) => axios.get(element)))
      .then((res) => setPokemon(res))
      .catch((erro) => console.log(erro));
  };
  useEffect(() => {
    getPokemon();
  }, []);

  const removeFromPokedex = (pokemonToRemove, onOpen, onClose) => {
    onOpen();
    setTimeout(() => {
      onClose();
      const newPokedex = pokedex.filter(
        (pokemonInPokedex) =>
          pokemonInPokedex.data.name !== pokemonToRemove.data.name
      );
      setPokedex(newPokedex);
    }, 1000);
  };

  const addToPokedex = (pokemonToAdd, onOpen, onClose) => {
    onOpen();
    setTimeout(() => {
      onClose();
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex);
    }, 200);
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemon,
        setPokemon,
        pokedex,
        setPokedex,
        addToPokedex,
        removeFromPokedex,
        grass,
        fire,
        bug,
        normal,
        getPokemon,
        details,
        water,
        wings,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
