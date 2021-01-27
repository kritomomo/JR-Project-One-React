import React from 'react';
import './ServicesPage.css';
import Page from '../../../Page';
import PageTitle from '../../../PageTitle';
import html5 from './assets/html5.png';
import css3 from './assets/css3.png';
import javaScript from './assets/javascript.png';

const ServicesPage = ({ 
    active,
}) => (
    <Page
        active={active}
        header={(<PageTitle title="Services"/>)}
    >
        <div class="page__content">
        <div class="servicesPage__services">
        <h3 class="services__title">
            My
            <span class="services__titleHightLight">Services</span>
        </h3>
        <div class="services">
            <div class="serviceItem">
            <div class="serviceItem__imageContainer">
                <img alt="HTML5" src={html5} class="serviceItem__image">
            </div>
            <h4 class="serviceItem__name">HTML5</h4>
            <div class="serviceItem__description">Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.</div>
            </div>
            <div class="serviceItem">
            <div class="serviceItem__imageContainer">
                <img alt="CSS3" src={css3}" class="serviceItem__image"\>
            </div>
            <h4 class="serviceItem__name">CSS3</h4>
            <div class="serviceItem__description">Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.</div>
            </div>
            <div class="serviceItem">
            <div class="serviceItem__imageContainer">
                <img alt="JavaScript" src="./assets/js.png" class="serviceItem__image">
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
            <img alt="REA Group" src="./assets/rea.png" class="clientItem">
            <img alt="carsales.com.au" src="./assets/carsales.svg" class="clientItem">
            <img alt="Seek" src="./assets/seek.png" class="clientItem">
        </div>
        </div>
    </div>
    </Page>
    
)

export default ServicesPage;

