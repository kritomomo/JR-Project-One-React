import React from 'react';
import './SocialMedia.css'; 
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialMedia = ({
    icon,
}) => (
    <FontAwesomeIcon icon={iconName} className="homepage__socialMediaItem"/>
    // <i className={`fab fa-${iconName} homepage__socialMediaItem`}></i>
)

export default SocialMedia;
