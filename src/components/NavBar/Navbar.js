import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { MdFavorite, MdShoppingCart } from 'react-icons/md';

const Navbar = ({ setIsSignIn, cartFood }) => {
  const signOutHandler = () => {
    setIsSignIn(false);
  };

  let totalNumberOfPortions = 0;
  for (let i in cartFood) totalNumberOfPortions += cartFood[i].numberOfPortions;

  return (
    <nav className='nav-container'>
      <div className='nav__logo'>
        <Link to='/'>
          I <MdFavorite className='nav__logo__icon' /> FOOD
        </Link>
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
        <div className='nav__containerRight__iconHolder'>
          <Link to='/cart'>
            <MdShoppingCart className='nav__containerRight__cartLogo' />
          </Link>
          <div
            className='nav__containerRight__cartItems'
            style={{
              visibility: totalNumberOfPortions > 0 ? 'visible' : 'hidden',
            }}
          >
            {totalNumberOfPortions}
          </div>
        </div>

        <button onClick={signOutHandler}>Sign Out</button>
      </div>
    </nav>
  );
};

export default Navbar;
