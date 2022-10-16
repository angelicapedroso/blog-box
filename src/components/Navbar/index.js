import React from 'react';
import { NavLink } from 'react-router-dom';
// import styles from './styles.module.css';

function Navbar() {
  return (
    <nav>
      <NavLink to="/">
        Blog
        <span>Box</span>
      </NavLink>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
