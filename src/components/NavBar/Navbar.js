import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { MdFavorite, MdShoppingCart } from 'react-icons/md';

const Navbar = ({ setIsSignIn }) => {
  const signOutHandler = () => {
    setIsSignIn(false);
  };

  return (
    <nav className='nav-container'>
      <div className='nav__logo'>
        I <MdFavorite className='nav__logo__icon' /> FOOD
      </div>

      <ul className='nav__routes'>
        <li className='nav__item'>
          <Link to='/'>Home</Link>
        </li>
        <li className='nav__item'>
          <Link to='/orders'>Orders</Link>
        </li>
        <li className='nav__item'>
          <Link to='/about'>About</Link>
        </li>
      </ul>

      <div className='nav__containerRight'>
        <MdShoppingCart className='nav__containerRight__cartLogo' />
        <button onClick={signOutHandler}>Sign Out</button>
      </div>
    </nav>
  );
};

export default Navbar;
