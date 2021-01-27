import React from 'react';
import './SocialMedia.css'; 
import '../node_modules/font-awesome/css/font-awesome.min.css';

const SocialMedia = ({
    iconName,
}) => (
    <i className={`fab fa-${iconName} homepage__socialMediaItem`}></i>
)

export default SocialMedia;
