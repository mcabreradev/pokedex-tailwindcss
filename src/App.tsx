import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import SearchBar from "./SearchBar";

import "./styles.css";

const App = () => {
  const [pokemonList, setPokemonList] = useState<
    Array<{ name: string; url: string }>
  >([]);
  const [filteredList, setFilteredList] = useState<
    Array<{ name: string; url: string }>
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await response.json();
      setPokemonList(data.results);
      setFilteredList(data.results);
    };
    fetchData();
  }, []);

  const handleSearch = (searchTerm: string) => {
    const filteredPokemon = pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredList(filteredPokemon);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <SearchBar onSearch={handleSearch} />
      <div className="flex flex-wrap justify-between">
        {filteredList.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            pokemon={pokemon}
            className="w-1/4 mb-8"
          />
        ))}
      </div>
    </div>
  );
};

export default App;
