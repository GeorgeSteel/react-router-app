import React from 'react';
import { NavLink } from 'react-router-dom';
import './css/Nav.css';

const Nav = () => {
    return (
        <nav className="navegacion">
            <NavLink to={'/about'} activeClassName="activo">About</NavLink>
            <NavLink to={'/products'} activeClassName="activo">Products</NavLink>
            <NavLink to={'/contact'} activeClassName="activo">Contact</NavLink>
        </nav>
    )
}

export default Nav;
