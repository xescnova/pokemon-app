import { useEffect, useState } from "react";
import Pokemon, { NewPokemon } from "./Pokemon";
import axios from "axios";
function PokemonList() {
  const [isLoading, setLoading] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [previousUrl, setPreviousUrl] = useState("");
  const [nextUrl, setNextUrl] = useState("");

  // const [filteredPokemonList, setFilteredPokemonList] = useState([]);
  useEffect(() => {
    setLoading(true);
    const getPersonajes = async () => {
      await axios
        .get(url)
        .then(function (response) {
          setPokemonList(response.data.results);
          setPreviousUrl(response.data.previous);
          setNextUrl(response.data.next);
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(function () {
          setLoading(false);
        });
    };
    getPersonajes();
  }, [url]);

  return (
    <div>
      <h1 className="flex justify-center">Pokemon List</h1>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <div className="w-1/2 flex flex-col">
            <div className="grid grid-cols-4 gap-4 ">
              {pokemonList.map((pokemon: NewPokemon, index: number) => (
                <Pokemon url={pokemon.url} key={index} />
              ))}
            </div>
            <div className="flex justify-center mt-5 items-center mr-7 gap-4">
              <button
                className="rounded-full bg-blue-400 w-16"
                type="button"
                onClick={() => setUrl(previousUrl)}
              >
                Menos
              </button>
              <button
                className="rounded-full bg-blue-400 w-16"
                type="button"
                onClick={() => setUrl(nextUrl)}
              >
                Mas
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PokemonList;
