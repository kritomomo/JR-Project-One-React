import React from 'react';
import './Education.css';
import '../Timeline';
import Timeline from '../Timeline';
const Education = () => (
    <div>
        <h3 class="resumeSub__title">Education</h3>
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

export default Education;