import React, { Children } from 'react';

const SubPage = ({ 
    title,
    children
}) => (
    <div className="pt-page">
        <div className="page-header color-1">
            <h2>{</h2>
        </div>
        <div className="page-content">{children}</div>
    </div>
)

export default SubPage;