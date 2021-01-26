import React from 'react';
import './Item.css';

const Item = ({
    active,
    onClick,
    children,
}) => {
    let className = 'navbar__item ';

    if (active) {
        className += 'navbar__item--active';
    }

    const onClick = (event) => {
        event.preventDefault();
        
        console.log('CLICKED', pageName);
        changePage(pageName);
    }

    return (
        <a onClick={(event) =>} class={className} >
            {children}
        </a>
    );
};

// export const A = () => { };
// export const B = () => { };
// export const MY_NAME =  'Robert Xu';

export default Item;