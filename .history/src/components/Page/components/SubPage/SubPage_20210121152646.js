import React from 'react';

const SubPage = ({ 
    props,
    title,
    header
    children,
}) => (
    <div className="pt-page" data-id={props}>
        <div class="section-inner custom-page-content">
            <div className="page-header color-1">
                <h2>{title}</h2>
            </div>
            <div className="page-content">{children}</div>
        </div>
    </div>
)

export default SubPage;