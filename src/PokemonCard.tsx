import React, { useState, useEffect } from "react";

interface Props {
  pokemon: { name: string; url: string };
  className?: string;
}

const PokemonCard = ({ pokemon, className }: Props) => {
  const [imageUrl, setImageUrl] = useState("");
  const [pokemonDetails, setPokemonDetails] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      setImageUrl(data.sprites.front_default);
      setPokemonDetails({
        name: data.name,
        types: data.types.map((type: any) => type.type.name).join(", "),
        strength: data.stats.map((stat: any) => stat.stat.name).join(", "),
        weakness: data.stats.map((stat: any) => stat.stat.name).join(", "),
        relatedPokemons: data.species.url
      });
    };
    fetchData();
  }, [pokemon]);

  return (
    <div
      className={`${className} bg-blue-500 rounded-lg shadow-lg p-6 mb-4 text-center text-white`}
    >
      <h2 className="text-2xl font-bold">{pokemonDetails.name}</h2>
      <img src={imageUrl} alt={pokemonDetails.name} />
      <p className="font-semibold">Type(s): {pokemonDetails.types}</p>
      <p className="font-semibold">Strength(s): {pokemonDetails.strength}</p>
      <p className="font-semibold">Weakness(es): {pokemonDetails.weakness}</p>
      <p className="font-semibold">
        Related Pokemon:{" "}
        <a href={pokemonDetails.relatedPokemons}>View related Pokemon</a>
      </p>
    </div>
  );
};

export default PokemonCard;
