import React from 'react';
import './TagLine.css';
import SocialMedia from './components/'

const TagLine = () => (
    <div class="homepage__title">
        
        <h2 class="homepage__name">Bowsy</h2>
        <div class="homepage__position">Super Mario</div>
        <div class="homepage__socialMedias">
            <SocialMedia iconName={twitter}/>
        </div>   
    </div>
)

export default TagLine;


<i class="fab fa-facebook-f homepage__socialMediaItem"></i>
<i class="fab fa-instagram homepage__socialMediaItem"></i>