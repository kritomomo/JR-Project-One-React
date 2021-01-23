import React from 'react';
import Item from './components/Item'
import './NavBar.css';
import { PAGE } from '../../../../constants';

const NavBar = ({ 
    currentPage,
    obj,
    render
}) => (
    <div className="navbar">
        <Item
            active={currentPage === PAGE.HOME}
            pageName={PAGE.HOME}
            obj={obj}
            href="HOME"
        >
            Home
        </Item>

        <Item
            active={currentPage === PAGE.RESUME}
            pageName={PAGE.RESUME}
            obj={obj}
            href="RESUME">
            Resume
        </Item>

        <Item
            active={currentPage === PAGE.SERVICES}
            pageName={PAGE.SERVICES}
            obj={obj}
            href="SERVICES">
            Services
        </Item>

        <Item
            
            href="BLOG">
            Blog
        </Item>

        <Item
            
            href="CONTACT">
            Contact
        </Item>
    </div>
);

export default NavBar;