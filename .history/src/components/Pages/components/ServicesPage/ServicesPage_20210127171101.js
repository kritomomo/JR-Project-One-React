import React from 'react';
import './ServicesPage.css';
import Page from '../../../Page';
import PageTitle from '../../../PageTitle';
import html5 from './assets/html5.png';
import css3 from './assets/css3.png';
import javaScript from './assets/javascript.png';
import ServicesItem from './components/ServicesItem';

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
                        <ServicesItem
                            items={[{
                                key:'KEY',
                                imgDesc:'HTML5',
                                img:{html5},
                                title:'HTML5',
                                text:'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.',
                            }, {
                                key:'KEY',
                                imgDesc:'CSS3',
                                img:{css3},
                                title:'CSS3',
                                text:'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.',
                            }, {
                                key:'KEY',
                                imgDesc:'JavaScript',
                                img:{javaScript},
                                title:'JavaScript',
                                text:'JavaScript often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.',
                            }]}
                        />

                    
                    
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
    </Page>
    
)

export default ServicesPage;

