import './searchEngine.css';
interface searchInterface {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  searchMovie: (e: React.FormEvent) => void;
  setIsSearched: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchEngine: React.FC<searchInterface> = ({
  search,
  setSearch,
  searchMovie,
  setIsSearched,
}: searchInterface) => {
  return (
    <section className='search-engine_container'>
      <h2 className='header_title'>
        {' '}
        <span className='green'>¿</span> Qué vemos hoy{' '}
        <span className='green'>?</span>
      </h2>
      <form className='search_form' onSubmit={searchMovie}>
        <input
          type='text'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setIsSearched(true);
          }}
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
