import React from 'react';
import './SocialMedia.css'; 
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialMedia = ({
    iconName,
}) => (
    <FontAwesomeIcon icon={iconName} className="/>
    // <i className={`fab fa-${iconName} homepage__socialMediaItem`}></i>
)

export default SocialMedia;
