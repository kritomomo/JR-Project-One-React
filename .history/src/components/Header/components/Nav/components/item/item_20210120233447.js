import React from 'react';
import { Nav } from 'react-bootstrap';

const Item = ({ 
    href,
    children,
}) => (
    <Nav.Link href={href}>{children}</Nav.Link>
)

export default 