import React from 'react';
import './Timeline.css';

const Timeline = () = (
    <div className="timeline">
        <h4 className="experience__title">{title}</h4>
        <div className="experience__meta">
            <span className="experience__year">{year}</span>
            &nbsp;
            <i className="experience__divider"></i>
            &nbsp;
            <span className="experience__company"></span>
        </div>
        <div className="experience__description"></div>
    </div>
)