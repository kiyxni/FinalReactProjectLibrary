import React from 'react';
import '../App';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
        <h1>Waqar's Book Library Application</h1>
      </div>
      <div>
        <Link to='/'>
          <h3>Home Page</h3>
        </Link>
      </div>
      <div>
        <Link to='/favourites'>
          <h3>Your Favourites</h3>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
