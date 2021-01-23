import React from 'react';
import './ResumePage.css';
import Page from '../../../Page';
import PageTitle from '../../../PageTitle';
import Education from './components/Education';
import Experience from './components/Experience';
import DesignSkills from './components/DesignSkills';
import CodingSkills from './components/CodingSkills';

const ResumePage = ({ 
	active,
}) => (
    <Page
        active={active}
        header={(<PageTitle>Resume</PageTitle>)}
    >
        <div class="page__content">
            <div class="resumePage__sub">
                <Education />
                <Experience/>
            </div>    
            <div class="resumePage__sub">
                <DesignSkills />
                <CodingSkills />     
            </div>
        </div>
    </Page>
)
export default ResumePage;