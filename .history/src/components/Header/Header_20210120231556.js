import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <div className></div>
        <Container>
            <Navbar.Brand href="#home">Robert Xu</Navbar.Brand>
        </Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#Home">Home</Nav.Link>
                <Nav.Link href="#Resume">Resume</Nav.Link>
                <Nav.Link href="#Services">Services</Nav.Link>
                <Nav.Link href="#Blog">Blog</Nav.Link>
                <Nav.Link href="#Contact">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>

    </Navbar>
)

export default Header;