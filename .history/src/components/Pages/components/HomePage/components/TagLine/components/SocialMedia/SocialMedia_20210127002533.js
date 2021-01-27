import React from 'react';
import './SocialMedia.css'; 
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialMedia = ({
    iconName,
}) => (
    <FontAwesomeIcon icon={iconName} className="homepage__socialMediaItem"/>
)

export default SocialMedia;
