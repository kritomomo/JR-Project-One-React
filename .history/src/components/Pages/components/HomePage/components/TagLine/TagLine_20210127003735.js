import React from 'react';
import './TagLine.css';
import SocialMedia from './components/SocialMedia';
import { faFacebookF,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons' 
import Carousel from 'react-bootstrap/Carousel'

const TagLine = () => (
    <div class="homepage__title">      
        <h2 class="homepage__name">Robert Xu</h2>
        <div class="homepage__position">Frontend-developer

        <Carousel>
            <Carousel.Item interval={1000}>    
                <Carousel.Caption>
                    <h3>First slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>
                
            <Carousel.Item interval={500}>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                </Carousel.Caption>
            </Carousel.Item>

</Carousel>
         
         
         
         
         
        </div>
        <div class="homepage__socialMedias">
            <SocialMedia iconName={faTwitter} />
            <SocialMedia iconName={faFacebookF} />
            <SocialMedia iconName={faInstagram} />

        </div>   
    </div>
)

export default TagLine;
