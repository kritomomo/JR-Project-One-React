import React from 'react';
import './Item.css';

const Item = ({
    active,
    href,
    children,
}) => (
    let className = 'navbar__item'

    <a class="item" href={href}>
    {children}
    </a>
);

export default Item;