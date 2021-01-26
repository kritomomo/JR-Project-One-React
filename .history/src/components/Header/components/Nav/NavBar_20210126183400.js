import React from 'react';
import Item from './components/Item'
import './NavBar.css';
import { PAGE } from '../../../../constants';

const NavBar = ({ 
    currentPage,
    changePage,
}) => (
    <div className="navbar">
        {[{
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
        }].map((item) => (
            <Item
                key={item.key}
                active={currentPage === item.key}
                onClick={() => changePage}
            >
                {item.text}
            </Item>
        ))}




        {/* <Item
            active={currentPage === PAGE.HOME}
            onClick={() => changePage(PAGE.HOME)}
        >
            Home
        </Item>

        <Item
            active={currentPage === PAGE.RESUME}
            onClick={() => changePage(PAGE.RESUME)}
        >
            Resume
        </Item>

        <Item
            active={currentPage === PAGE.SERVICES}
            onClick={() => changePage(PAGE.SERVICES)}
        >
            Services
        </Item>

        <Item
            active={currentPage === PAGE.BLOG}
            onClick={() => changePage(PAGE.BLOG)}
        >
            Blog
        </Item>

        <Item
            active={currentPage === PAGE.CONTACT}
            onClick={() => changePage(PAGE.CONTACT)}
        >
            Contact
        </Item> */}
    </div>
);

export default NavBar;