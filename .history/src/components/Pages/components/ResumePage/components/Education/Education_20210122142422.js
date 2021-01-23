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

export default Education;