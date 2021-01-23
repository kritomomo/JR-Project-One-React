import React from 'react';
import './ResumePage.css';
import Page from '../Page';
import Education from './components/Education';
import Experience from './components/Experience';
import CodingSkills from './components/CodingSkills';
import DesignSkills from './components/DesignSkills';

const ResumePage = ({ 
	active,
}) => (
  <Page title="RESUME" active={active}>
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