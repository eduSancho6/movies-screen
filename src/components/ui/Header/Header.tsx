import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header_container'>
      <Link to='/' className='nav_item'>
        <h1 className='logo'>Movies4All</h1>
      </Link>
      <nav className='nav_container'>
        <ul className='nav_items'>
          <Link to='/' className='nav_item'>
            Inicio
          </Link>
          <Link to='/favs' className='nav_item'>
            Mis favoritos
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
