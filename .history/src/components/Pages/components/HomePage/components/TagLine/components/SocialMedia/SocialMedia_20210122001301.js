import React from 'react';
import './SocialMedia.css'; 

const SocialMedia = (
    iconName,
) => (
    <div class="homepage__socialMedias">
            <i className="fab fa-${iconName} homepage__socialMediaItem"></i>

    </div>
)

export default SocialMedia;

<i class="fab fa-facebook-f homepage__socialMediaItem"></i>
<i class="fab fa-instagram homepage__socialMediaItem"></i>