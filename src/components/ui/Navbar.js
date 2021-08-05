import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav>
      <NavLink
        exact
        activeClassName='active'
        to='/'
        className=''
        aria-current='page'
      >
        BebidApp
      </NavLink>
      <ul>
        <li>
          <NavLink
            exact
            activeClassName='active'
            to='/cocktails'
            className=''
            aria-current='page'
          >
            Cocktails
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            activeClassName='active'
            to='/ordinary_drinks'
            className=''
          >
            Ordinary Drinks
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName='active' to='/beers' className=''>
            Beers
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
