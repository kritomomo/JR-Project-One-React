import React from 'react';
import './TagLine.css';
import SocialMedia from './components/SocialMedia';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const TagLine = () => (
    <div class="homepage__title">      
        <h2 class="homepage__name">Bowsy</h2>
        <div class="homepage__position">Super Mario</div>
        <div class="homepage__socialMedias">
            <SocialMedia iconName="twitter" />
            <SocialMedia iconName="facebook-f" />
            <SocialMedia iconName="instagram" />
            <FontAwesomeIcon icon={twitter} />
        </div>   
    </div>
)

export default TagLine;
