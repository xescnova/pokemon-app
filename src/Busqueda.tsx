type BuscarProps = {
  query: string;
  setQuery: (query: string) => void;
};

function Busqueda({ query, setQuery }: BuscarProps) {
  return (
    <input
      className="justify-center"
      placeholder="Buscar un pokemon"
      type="text"
      value={query}
      onChange={(event) => setQuery(event.target.value)}
    ></input>
  );
}

export default Busqueda;
