import React from 'react';
import './TagLine.css';
import SocialMedia from './components/SocialMedia';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,fatwitter } from '@fortawesome/free-brands-svg-icons' 

library.add(faFacebookF); 

const TagLine = () => (
    <div class="homepage__title">      
        <h2 class="homepage__name">Bowsy</h2>
        <div class="homepage__position">Super Mario</div>
        <div class="homepage__socialMedias">
            <SocialMedia iconName="twitter" />
            <SocialMedia iconName="facebook-f" />
            <SocialMedia iconName="instagram" />
            <FontAwesomeIcon icon={fatwitter} />
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faFacebookF} />
        </div>   
    </div>
)

export default TagLine;
