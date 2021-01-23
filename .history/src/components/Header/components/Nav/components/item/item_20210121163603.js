import React from 'react';
import './Item.css';

const Item = ({
    active,
    href,
    children,
}) => {
    let className = 'navbar__item';

    if (active) {
        className += 'navbar__item--active';
    }

    return (
        <a class={className} href={href}>
            {children}
        </a>
    );
};

export const A = () => { };
export const B = () => { };
export const MY_NAME =  '';

export default Item;