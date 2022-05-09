import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header_container'>
      <Link to='/' className='nav_item'>
        <h1 className='logo'>
          Movies<span className='span_red'>4</span>All
        </h1>
      </Link>
      <nav className='nav_container'>
        <ul className='nav_items'>
          <Link to='/favs' className='nav_item'>
            Mis favoritos
          </Link>
          <Link to='/popular' className='nav_item'>
            Populares
          </Link>
          <Link to='/rated' className='nav_item'>
            Mejor valoradas
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
