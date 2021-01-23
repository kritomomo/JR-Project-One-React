import React from 'react';
import './Pages.css';
import HomePage from './components/HomePage';
import ResumePage from './components/ResumePage';
import ServicesPage from './components/ServicesPage';
// import BlogPage from './components/BlogPage';
// import ContactPage from './components/ContactPage';
import { PAGE } from '../../constants';

const Pages = ({
    currentPage,
}) => (
    <div className="pages">
        <HomePage active={} />
        <ResumePage active />
        <ServicesPage />
    </div>        
)

export default Pages;