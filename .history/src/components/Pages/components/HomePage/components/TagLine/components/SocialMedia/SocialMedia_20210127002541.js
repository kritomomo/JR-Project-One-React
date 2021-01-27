import React from 'react';
import './SocialMedia.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialMedia = ({
    iconName,
}) => (
    <FontAwesomeIcon icon={iconName} className="homepage__socialMediaItem"/>
)

export default SocialMedia;
