import React from 'react';
import { NavLink } from 'react-router-dom';

interface IProps {}

const NavBar: React.FC<IProps> = (props) => (
  <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
    <div className="navbar-brand">
      Note App
    </div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink to="/" exact className="nav-link">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about" exact className="nav-link">About</NavLink>
      </li>
    </ul>
  </nav>
);

export default (NavBar);
