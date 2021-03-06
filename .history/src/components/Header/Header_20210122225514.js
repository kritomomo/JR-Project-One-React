import React from 'react';
import './Header.css';
import Logo from './components/Logo';
import NavBar from './components/Nav';

const Header = ({ 
    currentPage,
}) => (
    <div className="header">
        <div className="header__left">
            <Logo />
        </div>
        <div className="header___right">
            <NavBar currentPage={curr}/>
        </div>
    </div>
)

export default Header;