interface searchInterface {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  searchMovie: (e: React.FormEvent) => void;
}

const SearchEngine: React.FC<searchInterface> = ({
  search,
  setSearch,
  searchMovie,
}: searchInterface) => {
  return (
    <section className='search-engine_container'>
      <h2 className='header_title'>¿Qué vemos hoy?</h2>
      <form className='search_form' onSubmit={searchMovie}>
        <input
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='search_input'
        ></input>
        <button type='submit' className='search_button'>
          Buscar
        </button>
      </form>
    </section>
  );
};

export default SearchEngine;
