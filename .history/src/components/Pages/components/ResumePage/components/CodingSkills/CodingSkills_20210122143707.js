import React from 'react';
import './CodingSkills.css';

const CodingSkills = () => (
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
)

export default CodingSkills;