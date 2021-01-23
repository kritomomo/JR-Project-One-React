import React from 'react';
import './Experience.css';
import Timeline from '../Timeline';

const Experience = () => (
    <div>
        <h3 class="resumeSub__title">Experience</h3>
        <Timeline
            items={[{
                key: 'KEY',
                title: 'TITLE',
                year: '2020',
                company: 'Apple Inc',
                description: 'Description'
            }, {
                key: 'KEY',
                title: 'TITLE',
                year: '2020',
                company: 'Apple Inc',
                description: 'Description'
            }, {
                key: 'KEY',
                title: 'TITLE',
                year: '2020',
                company: 'Apple Inc',
                description: 'Description'
            }]}
        />
    </div>   
)

export default Experience;