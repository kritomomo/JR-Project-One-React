import React from 'react';
import './Pages.css';
// import HomePage from './components/HomePage';
// import ResumePage from './components/ResumePage';
// import ServicesPage from './components/ServicesPage';
// import BlogPage from './components/BlogPage';
// import ContactPage from './components/ContactPage';

const Pages = () => (
        <div className="pages">

            <div id="RESUME" class="page">
            <div class="page__header">
                <h2 class="page__title">RESUME</h2>
            </div>
            <div class="page__content">
                <div class="resumePage__sub">
                <div>
                    <h3 class="resumeSub__title">Education</h3>
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
            </div>
            <div id="SERVICES" class="page">
            <div class="page__header">
                <h2 class="page__title">Services</h2>
            </div>
            <div class="page__content">
                <div class="servicesPage__services">
                <h3 class="services__title">
                    My
                    <span class="services__titleHightLight">Services</span>
                </h3>
                <div class="services">
                    <div class="serviceItem">
                    <div class="serviceItem__imageContainer">
                        <img alt="HTML5" src="./assets/html5.png" class="serviceItem__image"></img>
                    </div>
                    <h4 class="serviceItem__name">HTML5</h4>
                    <div class="serviceItem__description">Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.</div>
                    </div>
                    <div class="serviceItem">
                    <div class="serviceItem__imageContainer">
                        <img alt="CSS3" src="./assets/css3.png" class="serviceItem__image"></img>
                    </div>
                    <h4 class="serviceItem__name">CSS3</h4>
                    <div class="serviceItem__description">Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.</div>
                    </div>
                    <div class="serviceItem">
                    <div class="serviceItem__imageContainer">
                        <img alt="JavaScript" src="./assets/js.png" class="serviceItem__image"></img>
                    </div>
                    <h4 class="serviceItem__name">JavaScript</h4>
                    <div class="serviceItem__description">JavaScript often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.</div>
                    </div>
                </div>
                </div>
                <div class="servicesPage__clients">
                <h3 class="services__title">
                    Clients
                </h3>
                <div class="clients">
                    <img alt="REA Group" src="./assets/rea.png" class="clientItem"></img>
                    <img alt="carsales.com.au" src="./assets/carsales.svg" class="clientItem"></img>
                    <img alt="Seek" src="./assets/seek.png" class="clientItem"></img>
                </div>
                </div>
            </div>
            </div>
            <div id="BLOG" class="page"></div>
            <div id="CONTACT" class="page"></div>
        </div>        
)

export default Pages;