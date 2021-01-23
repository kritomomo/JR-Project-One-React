import React from 'react';
import './Timeline.css';

const Timeline = ({
    items,
}) = (
    <div className="timelines">
        {items.map(({
            key,
            title,
            year,
            company,
            description,
        }) => (

        ))}
        
    </div>
)