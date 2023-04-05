import { useState } from "react";
import Busqueda from "./Busqueda";
import PokemonList from "./PokemonList";

function App() {
  const [query, setQuery] = useState("");
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10">
        <h1>POKEDEX</h1>
        <Busqueda query={query} setQuery={setQuery}></Busqueda>
      </div>
      <PokemonList></PokemonList>
    </>
  );
}

export default App;
