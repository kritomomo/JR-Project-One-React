import React from 'react';
import './SubPage.css';

const SubPage = ({
    props,
    active,
    title,
    header,
    children,
}) => {
    let className = 'page';

    if (active) { 
        className += 'page--active';
    }

    return(
    <div className={className} data-id={props}>
        <div class="section-inner custom-page-content">
            <div className="page__header color-1">
                {header || (<h2 className="page__title">{title}</h2>)}
            </div>
            <div className="page__content">{children}</div>
        </div>
    </div>
    )
}

export default SubPage;