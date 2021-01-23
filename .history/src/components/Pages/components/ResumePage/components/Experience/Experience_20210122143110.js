import React from 'react';
import './Experience.css';
import Timeline from '../Timeline'

const Experience = () => (
    <div>
    <h3 class="resumeSub__title">Experience</h3>
    <div class="timelines">
      <div class="timeline">
        <h4 class="experience__title">Specialization Course</h4>
        <div class="experience__meta">
          <span class="experience__year">2010</span>
          &nbsp;
          <i class="experience__divider"></i>
          &nbsp;
          <spans class="experience__company">Apple Inc.</spans>
        </div>
        <div class="experience__description">
          Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.
        </div>
      </div>
      <div class="timeline">
        <h4 class="experience__title">Specialization Course</h4>
        <div class="experience__meta">
          <span class="experience__year">2010</span>
          &nbsp;
          <i class="experience__divider"></i>
          &nbsp;
          <spans class="experience__company">Apple Inc.</spans>
        </div>
        <div class="experience__description">
          Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.
        </div>
      </div>
      <div class="timeline">
        <h4 class="experience__title">Specialization Course</h4>
        <div class="experience__meta">
          <span class="experience__year">2010</span>
          &nbsp;
          <i class="experience__divider"></i>
          &nbsp;
          <spans class="experience__company">Apple Inc.</spans>
        </div>
        <div class="experience__description">
          Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor.
        </div>
      </div>  
    </div>
  </div>   
)

export default Experience;