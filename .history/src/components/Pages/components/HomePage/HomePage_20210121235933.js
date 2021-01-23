import React from 'react'; 
import './HomePage.css';
import Page from '../Page';
import Avatar from './components/Avatar';
import TagLine from './components/'
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
            


        </div>
    )}>
        <div class=" homepage__content">
            <AboutMe />       
            <ContactTable />
        </div>
    </Page>
)

export default HomePage;