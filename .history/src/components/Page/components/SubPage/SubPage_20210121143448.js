import React, { Children } from 'react';

const SubPage = ({ 
    title,
    c
}) => (
    <div className="pt-page">
        <div className="page-header color-1">{title}</div>
        <div className="page-content">{children}</div>
    </div>
)

export default SubPage;