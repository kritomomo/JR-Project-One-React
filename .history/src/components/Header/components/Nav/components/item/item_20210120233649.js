import React from 'react';
import { Nav } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

const Item = ({ 
    href,
    children,
}) => (
    <Nav.Link href={href}>{children}</Nav.Link>
)

export default Item;