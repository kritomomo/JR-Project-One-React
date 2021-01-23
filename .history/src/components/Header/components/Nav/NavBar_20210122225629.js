import React from 'react';
import Item from './components/Item'
import './NavBar.css';
import {PAGE} from '../../../'

const NavBar = ({ 
    currentPage,
}) => (
    <div className="navbar">
        <Item href="HOME">Home</Item>
        <Item href="RESUME">Resume</Item>
        <Item href="SERVICES">Services</Item>
        <Item href="BLOG">Blog</Item>
        <Item href="CONTACT">Contact</Item>
    </div>
);

export default NavBar;