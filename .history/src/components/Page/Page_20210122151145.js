import React from 'react';
import './Page.css';
import PageTitle from '../PageTitle';

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
                    {header}
                </div>
                <div className="page__content">{children}</div>
        </div>
    );
};

export default Page;