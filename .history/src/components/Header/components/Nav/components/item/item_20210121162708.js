import React from 'react';
import './Item.css';

const Item = ({
    active,
    href,
    children,
}) => (
    let className = 'navbar__item';

    if (active) { 
        className += 
    }

    <a class="item" href={href}>
    {children}
    </a>
);

export default Item;