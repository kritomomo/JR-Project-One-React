import React from 'react';
import './Pages.css';
import HomePage from './components/HomePage';
import ResumePage from './components/ResumePage';
import ServicesPage from './components/ServicesPage';
// import BlogPage from './components/BlogPage';
// import ContactPage from './components/ContactPage';

const Pages = () => (
    <div className="pages">
        <HomePage />
        <ResumePage />
        <ServicesPage />
    </div>        
)

export default Pages;