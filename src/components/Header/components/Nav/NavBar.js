import React from 'react';
import Item from './components/Item'
import './NavBar.css';
import { PAGE } from '../../../../constants';

const ITEMS = [{
    key: PAGE.HOME,
    text: 'Home',
}, {
    key: PAGE.RESUME,
    text: 'Resume',
}, {
    key: PAGE.SERVICES,
    text: 'Services',
}, {
    key: PAGE.BLOG,
    text: 'Blog',
}, {
    key: PAGE.CONTACT,
    text: 'Contact',
}];


const NavBar = ({ 
    currentPage,
    changePage,
}) => (
    <div className="navbar">
        {ITEMS.map((item) => (
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