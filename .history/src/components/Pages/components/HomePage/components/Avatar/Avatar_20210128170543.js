import React from 'react';
import './Avatar.css';

const Avatar = ({ 
    img,
}) => (
    <>
        
        <image class="homepage__avatar" src={img} alt="Avatar" />
    </>
)

export default Avatar;