import './searchEngine.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
interface searchInterface {
  search?: string;
  setSearch?: React.Dispatch<React.SetStateAction<string>>;
  searchMovie: (e: React.FormEvent) => void;
}

const SearchEngine: React.FC<searchInterface> = ({
  searchMovie,
}: searchInterface) => {
  const [search, setSearch] = useState<string>('');

  return (
    <section className='search-engine_container'>
      <h2 className='header_title'>
        {' '}
        <span className='green'>¿</span> Qué vemos hoy{' '}
        <span className='green'>?</span>
      </h2>
      <form className='search_form'>
        <input
          type='text'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className='search_input'
        ></input>
        <Link to={`/search/${search}`} className='search_button'>
          Buscar
        </Link>
      </form>
    </section>
  );
};

export default SearchEngine;
