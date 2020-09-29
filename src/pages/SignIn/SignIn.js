import React, { useState } from 'react';
import { MdFavorite } from 'react-icons/md';
import './SignIn.css';

const SignIn = ({ setIsSignIn }) => {
  const [userEmailAdd, setUserEmailAdd] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const user_email = 'test@test.com';
  const password = 'test';

  const signInHandler = (e) => {
    e.preventDefault();
    if (userEmailAdd === user_email && userPassword === password) {
      setIsSignIn(true);
    } else {
      alert(
        'Combination of entered email and password is incorrect! Try again'
      );
    }
  };

  return (
    <div className='signin-container'>
      <div className='signin__card'>
        <div className='signin__card__header'>
          <h2>
            Sign In to I <MdFavorite className='signin__card__header__icon' />{' '}
            FOOD
          </h2>
        </div>

        <form className='signin__card__form'>
          <input
            type='email'
            value={userEmailAdd}
            onChange={(e) => setUserEmailAdd(e.target.value)}
            required
            placeholder='Enter E-MAIL'
          />
          <input
            type='password'
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            required
            placeholder='Enter PASSWORD'
          />
          <button
            type='submit'
            className='signin__card__button'
            onClick={signInHandler}
          >
            SIGN IN
          </button>
        </form>
        <div className='signin__card__footer'>
          <p>Don't have an Account? Sign up here!</p>
        </div>
        <p className='signin__card__loginInfo'>
          LOGIN INFO: test@test.com / test
        </p>
      </div>
    </div>
  );
};

export default SignIn;
