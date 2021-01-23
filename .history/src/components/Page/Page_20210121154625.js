import React from 'react';
import './Page.css';
import HomePage from './components/HomePage';
import ResumePage from './components/ResumePage';
import ServicesPage from './components/ServicesPage';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';

const Page = () => (
    <div className="pt-wrapper">
        <div className=></div>
        <HomePage />
        <ResumePage />
        <ServicesPage />
        <BlogPage />
        <ContactPage />
    </div>
)

export default Page;