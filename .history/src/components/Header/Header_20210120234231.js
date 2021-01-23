import React from 'react';

import Logo from './components/Logo';
import NavBar from './components/Nav';

const Header = () => (
    <div className="header">
        <div className="header__left">
            <Logo />
        </div>
        <div className="header___right">
            <NavBar/>
        </div>
    </div>
)

export default Header;