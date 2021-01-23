import React from 'react';
import './Pages.css';
import HomePage from './components/HomePage';
import ResumePage from './components/ResumePage';
import ServicesPage from './components/ServicesPage';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';
import { PAGE } from '../../constants';

const Pages = ({
    currentPage,
}) => (
    <div className="pages">
        <HomePage active={currentPage === PAGE.HOME} />
        <ResumePage active={currentPage === PAGE.RESUME} />
        <ServicesPage active={currentPage === PAGE.SERVICES} />
        <BlogPage active={currentPage === PAGE.BLOG} />
        <ContactPage active={currentPage === PAGE.} />
    </div>        
)

export default Pages;