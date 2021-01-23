import React from 'react';


const Item = ({ 
    href,
    children,
}) => (
    <a href={href}>{children}</a>
)

export default Item;