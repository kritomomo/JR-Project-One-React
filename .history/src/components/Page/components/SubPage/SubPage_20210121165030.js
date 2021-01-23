import React from 'react';
import './SubPage.css';

const SubPage = ({ 
    props,
    title,
    header,
    children,
}) => (
    <div className="page" data-id={props}>
        <div class="section-inner custom-page-content">
            <div className="page-header color-1">
                { header || (<h2 className="header-title">{title}</h2>)}               
            </div>
            <div className="page__content">{children}</div>
        </div>
    </div>
)

export default SubPage;