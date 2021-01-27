import React from 'react';
import './TagLine.css';
import SocialMedia from './components/SocialMedia';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons' 

library.add(faFacebookF); 

const TagLine = () => (
    <div class="homepage__title">      
        <h2 class="homepage__name">Robert Xu</h2>
        <div class="homepage__position">Web </div>
        <div class="homepage__socialMedias">
            <SocialMedia iconName={faTwitter} />
            <SocialMedia iconName={faFacebookF} />
            <SocialMedia iconName={faInstagram} />

        </div>   
    </div>
)

export default TagLine;
