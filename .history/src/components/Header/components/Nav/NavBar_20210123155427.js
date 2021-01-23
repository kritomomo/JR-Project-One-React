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
            href="HOME"
        >
            Home</Item>
        <Item active={currentPage === PAGE.RESUME} href="RESUME">Resume</Item>
        <Item active={currentPage === PAGE.SERVICES} href="SERVICES">Services</Item>
        <Item href="BLOG">Blog</Item>
        <Item href="CONTACT">Contact</Item>
    </div>
);

export default NavBar;