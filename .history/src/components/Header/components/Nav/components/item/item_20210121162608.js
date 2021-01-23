import React from 'react';
import './Item.css';

const Item = ({
    active
    href,
    children,
}) => (
    <a class="item" href={href}>
    {children}
    </a>
);

export default Item;