import { usePokemon } from "./hooks/usePokemon";

export type NewPokemon = {
  url: string;
};
function Pokemon(props: NewPokemon) {
  const { pokemon } = usePokemon(props.url);
  return (
    <div className="w-40 h-50 rounded bg-cyan-200">
      <div className="flex items-center justify-center hover:border border-black rounded cursor-pointer">
        <div key={pokemon?.id}>
          <img src={pokemon?.sprites.front_default}></img>
          <div className="ml-3">
            {pokemon &&
              pokemon?.name.charAt(0).toUpperCase() + pokemon!.name.slice(1)}
          </div>
        </div>
        <p>#{pokemon?.id}</p>
      </div>
    </div>
  );
}

export default Pokemon;
