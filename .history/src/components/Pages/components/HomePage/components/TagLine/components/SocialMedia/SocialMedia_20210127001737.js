import React from 'react';
import './SocialMedia.css'; 


const SocialMedia = ({
    iconName,
}) => (
    <FontAwesomeIcon icon={iconName} />
    // <i className={`fab fa-${iconName} homepage__socialMediaItem`}></i>
)

export default SocialMedia;
