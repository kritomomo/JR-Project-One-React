import React from 'react';
import './Avatar.css';

const Avatar = ({ 
    items,
}) => (
    <>
        {img.map(({
            img,
        }) => (
            <image class="homepage__avatar" src={img} alt="Avatar" />
        ))}
        
    </>
)

export default Avatar;