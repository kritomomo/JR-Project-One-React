import React from 'react';
import './Header.css';
import Logo from './components/Logo';
import NavBar from './components/Nav';

const Header = ({ 
    currentPage,
    obj,
}) => (
    <div className="header">
        <div className="header__left">
            <Logo />
        </div>
        <div className="header___right">
            <NavBar currentPage={currentPage} obj={obj}/>
        </div>
    </div>
)

export default Header;