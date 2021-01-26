import React from 'react';
import Item from './components/Item'
import './NavBar.css';
import { PAGE } from '../../../../constants';

const ITEMS = 


const NavBar = ({ 
    currentPage,
    changePage,
}) => (
    <div className="navbar">
        {.map((item) => (
            <Item
                key={item.key}
                active={currentPage === item.key}
                onClick={() => changePage(item.key)}
            >
                {item.text}
            </Item>
        ))}
    </div>
);

export default NavBar;