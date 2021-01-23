import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container></Container>
        

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
    </Navbar.Collapse>
    </Navbar>
)

export default Header;