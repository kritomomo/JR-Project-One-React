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
              
              <div>
                <h3 class="resumeSub__title">Design <span class="resumeSub__titleHighlight">Skills</span></h3>
                <div class="skill">
                  <h4 class="skill__title">Web Design</h4>
                  <div class="skill__level skill__level--webDesign"></div>
                </div>
                <div class="skill">
                  <h4 class="skill__title">Graphic Design</h4>
                  <div class="skill__level skill__level--graphicDesign"></div>
                </div>
                <div class="skill">
                  <h4 class="skill__title">Print Design</h4>
                  <div class="skill__level skill__level--printDesign"></div>
                </div>
              </div>
              
              <div>
                <h3 class="resumeSub__title">Coding <span class="resumeSub__titleHighlight">Skills</span></h3>
                <div class="skill">
                  <h4 class="skill__title">HTML Design</h4>
                  <div class="skill__level skill__level--htmlDesign"></div>
                </div>
                <div class="skill">
                  <h4 class="skill__title">CSS Design</h4>
                  <div class="skill__level skill__level--cssDesign"></div>
                </div>
                <div class="skill">
                  <h4 class="skill__title">JavaScript Design</h4>
                  <div class="skill__level skill__level--jsDesign"></div>
                </div>
              </div>
        
            </div>
      

        </div>
    </Page>
)
export default ResumePage;