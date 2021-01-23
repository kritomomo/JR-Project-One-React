import React from 'react'; 
import './HomePage.css';
import img from './assets/Bowsy.png';
import Page from '../Page';
import ContactTable from './components/ContatcTable/ContactTable';

const HomePage = ({ 
	active,
}) => (
    <Page 
    active={active} 
    header={(
        <div class="homepage__header">
            <image class="homepage__avatar" src={img} alt="Avatar" />
        <div class="homepage__title">
        <h2 class="homepage__name">Bowsy</h2>
        <div class="homepage__position">Super Mario</div>
        <div class="homepage__socialMedias">
            <i class="fab fa-twitter homepage__socialMediaItem"></i>
            <i class="fab fa-facebook-f homepage__socialMediaItem"></i>
            <i class="fab fa-instagram homepage__socialMediaItem"></i>
        </div>
        </div>
    </div>
    )}>
        <div class=" homepage__content">
        <div>
        <h3 class="homepage__aboutMeHeader">
            About
            <span class="homepage__aboutMeHeaderHighlight">Me</span>
        </h3>
        <div class="homepage__aboutMeContent">
            Bright and optimistic, Tifa always cheers up the others when they're down. But don't let her looks fool you, she can decimate almost any enemy with her fists...
        </div>
            </div>
            

        
        <ContactTable/>
            

    </div>
    </Page>






 


)

export default HomePage;