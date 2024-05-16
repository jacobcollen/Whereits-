// Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';

function Navbar() {
  return (
    <nav className='nav'>
      <Link className='nav__link' to='/events' button="true">Events</Link>
      <Link className='nav__link' to='/cart' button="true">Cart</Link>
      <Link className='nav__link' to='/tickets' button="true">Tickets</Link>
    </nav>
  );
}

export default Navbar;