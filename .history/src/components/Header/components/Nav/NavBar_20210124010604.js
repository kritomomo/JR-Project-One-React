import React from 'react';
import Item from './components/Item'
import './NavBar.css';
import { PAGE } from '../../../../constants';

const NavBar = ({ 
    currentPage,
    obj,
    render,
}) => (
    <div className="navbar">
        <Item
            active={currentPage === PAGE.HOME}
            pageName={PAGE.HOME}
            obj={obj}
            render={render}
            href="HOME"
        >
            Home
        </Item>

        <Item
            active={currentPage === PAGE.RESUME}
            pageName={PAGE.RESUME}
            obj={obj}
            render={render}
            href="RESUME"
        >
            Resume
        </Item>

        <Item
            active={currentPage === PAGE.SERVICES}
            pageName={PAGE.SERVICES}
            obj={obj}
            render={render}
            href="SERVICES"
        >
            Services
        </Item>

        <Item
            active={currentPage === PAGE.BLOG}
            pageName={PAGE.BLOG}
            obj={obj}
            render={render}
            href="BLOG"
        >
            Blog
        </Item>

        <Item
            active={currentPage === PAGE.CONTACT}
                        pageName={PAGE.SERVICES}
                        obj={obj}
                        render={render}
            href="CONTACT">
            Contact
        </Item>
    </div>
);

export default NavBar;