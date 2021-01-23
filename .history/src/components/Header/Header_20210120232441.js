import React from 'react';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './components/Logo';

const Header = () => (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <div className="header-left">
            <Logo />
        </div>

        
        

    </Navbar>
)

export default Header;