import React from 'react';
import Item from './components/Item'
import './NavBar.css';
import { PAGE } from '../../../../constants';

const NavBar = ({ 
    currentPage,
    changePage,
}) => (
    <div className="navbar">
        <Item
            active={currentPage === PAGE.HOME}
            onClick={() => changePage(PAGE.HOME)}
        >
            Home
        </Item>

        <Item
            active={currentPage === PAGE.RESUME}
            onClick={() => changePage(PAGE.)}
        >
            Resume
        </Item>

        <Item
            active={currentPage === PAGE.SERVICES}
            pageName={PAGE.SERVICES}
            changePage={changePage}
        >
            Services
        </Item>

        <Item
            active={currentPage === PAGE.BLOG}
            pageName={PAGE.BLOG}
            changePage={changePage}
        >
            Blog
        </Item>

        <Item
            active={currentPage === PAGE.CONTACT}
            pageName={PAGE.CONTACT}
            changePage={changePage}
        >
            Contact
        </Item>
    </div>
);

export default NavBar;