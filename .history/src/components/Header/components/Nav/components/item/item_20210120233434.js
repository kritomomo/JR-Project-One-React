import React from 'react';
import { Nav } from 'react-bootstrap';

const Item = ({ 
    href,
    childrem,
}) => (
    <Nav.Link href={href}>{children}</Nav.Link>
)