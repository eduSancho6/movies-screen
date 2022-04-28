import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className='header_container'>
      <h1>Movies4All</h1>
      <nav className='nav_container'>
        <ul className='nav_items'>
          <li className='nav_item'>Inicio</li>
          <li className='nav_item'>Mis favoritos</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
