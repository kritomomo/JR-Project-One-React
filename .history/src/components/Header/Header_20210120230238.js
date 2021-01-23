import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        
        <Container>
            <Navbar.Brand href="#home">Robert Xu</Navbar.Brand>
        </Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href>Home</Nav.Link>
            </Nav>
        </Navbar.Collapse>

    </Navbar>
)

export default Header;