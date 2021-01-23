import React from 'react';

import Logo from './components/Logo';
import NavBar from './components/Nav';

const Header = () => (

        <div className="header-left">
            <Logo />
        </div>
        <div className="header-right">
            <NavBar/>
        </div>
    </Navbar>
)

export default Header;