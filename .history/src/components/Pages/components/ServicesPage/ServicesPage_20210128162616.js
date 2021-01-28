import React from 'react';
import './ServicesPage.css';
import Page from '../../../Page';
import PageTitle from '../../../PageTitle';
import ServicesItem from './components/ServicesItem';
import html5 from './components/ServicesItem/assets/html5.png';
import css3 from './components/ServicesItem/assets/css3.png';
import javascript from './components/ServicesItem/assets/javascript.png';
import { text } from '@fortawesome/fontawesome-svg-core';

class ServicesPage extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            key: 1,
            imgDesc: 'HTML5',
            img: 3,
            title: 'HTML5',
            text:5,
        };
    }

    render() {
        return (
            <ServicesItem
                key={this.state.key}
                imgDesc={this.state.imgDesc}
                img={this.state.img}
                title={this.state.title}
                text={this.state.text}
            />
        );
    }
}

// const ServicesPage = ({ 
//     active,
// }) => (
//     <Page
//         active={active}
//         header={(<PageTitle title="Services"/>)}
//     >
//         <div className="page__content">
//             <div className="servicesPage__services">
//                 <h3 className="services__title">
//                     My
//                     <span className="services__titleHightLight">Services</span>
//                 </h3>              
//                 <div class="services"> 
//                         <ServicesItem
//                             items={[{
//                                 key:'KEY',
//                                 imgDesc:'HTML5',
//                                 img:'require("./assets/html5.png")',
//                                 title:'HTML5',
//                                 text:'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.',
//                             }, {
//                                 key:'KEY',
//                                 imgDesc:'CSS3',
//                                 img:{css3},
//                                 title:'CSS3',
//                                 text:'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.',
//                             }, {
//                                 key:'KEY',
//                                 imgDesc:'JavaScript',
//                                 img:{javascript},
//                                 title:'javaScript',
//                                 text:'JavaScript often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.',
//                             }]}
//                         />

                    
                    
//                 </div>     
//             </div>
                
//             <div className="servicesPage__clients">
//                 <h3 className="services__title">
//                     Clients
//                 </h3>
//                 <div className="clients">
//                     <img alt="" src="" class="clientItem" />
//                     <img alt="" src="" class="clientItem" />
//                     <img alt="" src="" class="clientItem" />
//             </div>
//             </div>
//         </div>
//     </Page>
    
// )

export default ServicesPage;

