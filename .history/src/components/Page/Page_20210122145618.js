import React from 'react';
import './Page.css';

const Page = ({
    active,
    header,
    children,
}) => {
    let className = 'page ';

    if (active) {
        className += 'page--active';
    }

    return (
        <div className={className}>
                <div className="page__header">
                    {}
                </div>
                <div className="page__content">{children}</div>
        </div>
    );
};

export default Page;