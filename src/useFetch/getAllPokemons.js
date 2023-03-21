import { useState, useEffect } from "react";

export function useFetchGetAllPokemons() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const pokeApiUrl = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0.`;

  useEffect(() => {
    setLoading(true);

    fetch(pokeApiUrl)
      .then((res) => res.json())
      .then((data) =>
        Promise.all(data.results.map((pokemon) => fetch(pokemon.url)))
      )
      .then((response) => Promise.all(response.map((res) => res.json())))
      .then((info) => {
        setPokemons(info);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { error, loading, pokemons };
}
