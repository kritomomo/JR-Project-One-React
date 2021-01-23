import React from 'react';
import './TagLine.css';
import SocialMedia from './components/SocialMedia';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TagLine = () => (
    <div class="homepage__title">      
        <h2 class="homepage__name">Bowsy</h2>
        <div class="homepage__position">Super Mario</div>
        <div class="homepage__socialMedias">
            <SocialMedia iconName="twitter" />
            <SocialMedia iconName="facebook-f" />
            <SocialMedia iconName="instagram"/>
        </div>   
    </div>
)

export default TagLine;
