import React from 'react';
import './TagLine.css';
import SocialMedia from './components/SocialMedia';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons' 

library.add(faFacebookF); 

const TagLine = () => (
    <div class="homepage__title">      
        <h2 class="homepage__name">Robert Xu</h2>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <div class="carousel-text">Web Designer</div>
                                            </div>
                                            <div class="carousel-item">
                                                <div class="carousel-text">Frontend-developer</div>
                                            </div>
                                        </div>
                                    </div>
        <div class="homepage__position">Super Mario</div>
        <div class="homepage__socialMedias">
            <SocialMedia iconName={faTwitter} />
            <SocialMedia iconName={faFacebookF} />
            <SocialMedia iconName={faInstagram} />

        </div>   
    </div>
)

export default TagLine;
