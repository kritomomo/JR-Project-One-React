import React from 'react';
import './SocialMedia.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialMedia = ({
    iconName,
}) => (
    <i className={`fab fa-${iconName} homepage__socialMediaItem`}></i>
)

export default SocialMedia;
