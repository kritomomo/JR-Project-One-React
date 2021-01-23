import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Robert Xu</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
    </Navbar.Collapse>
    </Navbar>
)

export default Header;