import React from 'react';
import { Nav, } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Item from './components/Item';

const NavBar = () => (
    <>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    
                <Item href="Home">Home</Item>
                </Nav>
        </Navbar.Collapse>
    </>
)

export default NavBar;