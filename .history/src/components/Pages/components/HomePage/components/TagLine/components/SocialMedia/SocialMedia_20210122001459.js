import React from 'react';
import './SocialMedia.css'; 

const SocialMedia = (
    iconName,
) => (
    <div class="homepage__socialMedias">
        <i className={fab fa-${iconName} homepage__socialMediaItem}></i>

    </div>
)

export default SocialMedia;
