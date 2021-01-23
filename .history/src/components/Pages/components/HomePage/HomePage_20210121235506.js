import React from 'react'; 
import './HomePage.css';
import Page from '../Page';
import Avatar from './components/Avatar';
import ContactTable from './components/ContactTable';
import AboutMe from './components/AboutMe'

const HomePage = ({ 
	active,
}) => (
    <Page 
    active={active} 
    header={(
        <div class="homepage__header">
            <Avatar />
            
            
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
            <AboutMe />       
            <ContactTable />
        </div>
    </Page>
)

export default HomePage;