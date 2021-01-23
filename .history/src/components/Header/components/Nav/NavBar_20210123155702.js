import React from 'react';
import Item from './components/Item'
import './NavBar.css';
import { PAGE } from '../../../../constants';

const NavBar = ({ 
    currentPage,
}) => (
    <div className="navbar">
        <Item
            active={currentPage === PAGE.HOME}
            pageName={PAGE.HOME}
            currentPage={currentPage}
            href="HOME"
        >
            Home
        </Item>

        <Item
            active={currentPage === PAGE.RESUME}
            pageName={PAGE.RESUME}
            currentPage={currentPage}
            href="RESUME">
            Resume
        </Item>

        <Item
            active={currentPage === PAGE.SERVICES}
            pageName={PA}
            href="SERVICES">
            Services
        </Item>

        <Item href="BLOG">
            Blog
        </Item>

        <Item href="CONTACT">
            Contact
        </Item>
    </div>
);

export default NavBar;