import React, { Children } from 'react';

const SubPage = ({ 
    title,
    children
}) => (
    <div className="pt-page">
        <div class="section-inner custom-page-content">
        <div className="page-header color-1">
            <h2>{title}</h2>
        </div>
        <div className="page-content">{children}</div>
    </div>
)

export default SubPage;