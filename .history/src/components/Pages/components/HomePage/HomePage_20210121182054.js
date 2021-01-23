import React from 'react'; 
import './HomePage.css';
// import imgURL from './assets/Bowsy.png';
// import Page from '../Page';

const HomePage = ({ 
	active,
}) => (
    <Page 
    active={active} 
    header={(
        <div class="homepage__header">
        <image class="homepage__avatar" src="./assets/avatar.png" alt="Avatar" />
        <div class="homepage__title">
        <h2 class="homepage__name">Tifa Lockhart</h2>
        <div class="homepage__position">Final Fantasy VII</div>
        <div class="homepage__socialMedias">
            <i class="fab fa-twitter homepage__socialMediaItem"></i>
            <i class="fab fa-facebook-f homepage__socialMediaItem"></i>
            <i class="fab fa-instagram homepage__socialMediaItem"></i>
        </div>
        </div>
    </div>
    )}>

    </Page>






 


)

export default HomePage;