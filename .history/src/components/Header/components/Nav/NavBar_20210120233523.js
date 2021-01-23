import React from 'react';
import { Nav, } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Item from './components/Item';

const NavBar = () => (
    <>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#Home">Home</Nav.Link>
                    <Nav.Link href="#Resume">Resume</Nav.Link>
                    <Nav.Link href="#Services">Services</Nav.Link>
                    <Nav.Link href="#Blog">Blog</Nav.Link>
                <Nav.Link href="#Contact">Contact</Nav.Link>
                <Item></Item>
                </Nav>
        </Navbar.Collapse>
    </>
)

export default NavBar;