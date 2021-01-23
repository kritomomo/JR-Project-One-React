import React from 'react'; 
import './HomePage.css';
import Page from '../Page';
import Avatar from './components/Avatar';
import TagLine from './components/TagLine';
import ContactTable from './components/Contactable';
import AboutMe from './components/AboutMe'

const HomePage = ({ 
	active,
}) => (
    <Page 
    active={active} 
    header={(
        <div class="homepage__header">
            <img src={require('./components/Avatar/assets/Bowsy.png')}/>
            <Avatar />           
            <TagLine />
        </div>
    )}>
        <div class=" homepage__content">
            <AboutMe />       
            <ContactTable />
        </div>
    </Page>
)

export default HomePage;