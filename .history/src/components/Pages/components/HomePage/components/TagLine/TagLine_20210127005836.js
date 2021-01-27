import React from 'react';
import './TagLine.css';
import SocialMedia from './components/SocialMedia';
import { faFacebookF,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons' 


const phrases = ["An array", "of strings", "to pass the component"]; 
const interval = 3000; 
const typistProps = {}

const TagLine = () => (
    <div class="homepage__title">      
        <h2 class="homepage__name">Robert Xu</h2>
        <div class="homepage__position">


        
        </div>
        <div class="homepage__socialMedias">
            <SocialMedia iconName={faTwitter} />
            <SocialMedia iconName={faFacebookF} />
            <SocialMedia iconName={faInstagram} />

        </div>   
    </div>
)

export default TagLine;
