import { useState,memo } from 'react';
// import { useState, useEffect } from 'react';
import { LOGO_URL } from '../utils/constants';

const Header = () => {
  const [btnName, setBtnName] = useState('Login');
  console.log('Header rendered');
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={LOGO_URL} />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className='login-btn'
            onClick={() => {
              setBtnName('Logout');
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default memo(Header);
