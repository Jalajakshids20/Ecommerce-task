import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <Link to="/" className='logo'>
                <span className='jalstore-link'>JalStore</span>
            </Link>
            <div className='nav-links'>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">About</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;
