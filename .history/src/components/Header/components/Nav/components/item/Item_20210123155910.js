import React from 'react';
import './Item.css';

const Item = ({
    active,
    href,
    pageName,
    curren
    children,
}) => {
    let className = 'navbar__item';

    if (active) {
        className += 'navbar__item--active';
    }

    const onClick = (event) => {
        event.preventDefault();


    }

    return (
        <a class={className} href={href}>
            {children}
        </a>
    );
};

export const A = () => { };
export const B = () => { };
export const MY_NAME =  'Robert Xu';

export default Item;