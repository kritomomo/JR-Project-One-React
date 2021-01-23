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
            pageName={PAGE.HOME}

            href="HOME"
        >
            Home
        </Item>

        <Item
            active={currentPage === PAGE.RESUME}
            pageName={PAGE.RESUME}

            href="RESUME"
        >
            Resume
        </Item>

        <Item
            active={currentPage === PAGE.SERVICES}
            pageName={PAGE.SERVICES}

            href="SERVICES"
        >
            Services
        </Item>

        <Item
            active={currentPage === PAGE.BLOG}
            pageName={PAGE.BLOG}

            href="BLOG"
        >
            Blog
        </Item>

        <Item
            active={currentPage === PAGE.CONTACT}
            pageName={PAGE.CONTACT}

            href="CONTACT"
        >
            Contact
        </Item>
    </div>
);

export default NavBar;