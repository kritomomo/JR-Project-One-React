import React from 'react';
import './Item.css';

const Item = ({
    active,
    href,
    children,
}) => (
    let className = 'navbar__item';

    if (active) { 
        className += 'navbar__item--active';
    }

    return (
        <a class={class} href={href}>
        {children}
        </a>   
    )

    
);

export default Item;