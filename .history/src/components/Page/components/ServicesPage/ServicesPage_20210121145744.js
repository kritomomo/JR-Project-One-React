import React from 'react';
import './ServicesPage.css';
import SubPage from '../SubPage';

const ServicesPage = () => (
    <SubPage title="Services" props="services">
        <div class="row">
                <div class="col-sm-12 col-md-12">
                    <div class="block-title">
                        <h3>My <span>Services</span></h3>
                    </div>
                </div>

                <div class="col-sm-6 col-md-3">
                    <div class="service-block">
                        <div class="service-info">
                            <div class="service-image">
                                <img src="images/service/web_design_icon.png" alt="Responsive Design" class="mCS_img_loaded"></img>
                            </div>
                            <h4>Web Design</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6 col-md-3">
                    <div class="service-block">
                        <div class="service-info">
                            <div class="service-image">
                                <img src="images/service/photography_icon.png" alt="Photography" class="mCS_img_loaded"></img>
                            </div>
                            <h4>Photography</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6 col-md-3">
                    <div class="service-block">
                        <div class="service-info">
                            <div class="service-image">
                                <img src="images/service/creativity_icon.png" alt="Creativity" class="mCS_img_loaded"></img>
                            </div>
                            <h4>Management</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                        </div>
                    </div>
                </div>

                <div class="col-sm-6 col-md-3">
                    <div class="service-block">
                        <div class="service-info">
                            <div class="service-image">
                                <img src="images/service/advertising_icon.png" alt="Advertising" class="mCS_img_loaded"></img>
                            </div>
                            <h4>Advertising</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                        </div>
                    </div>
                </div>
            </div>
        <div class="row">
                <div class="col-sm-12 col-md-12">
                    <div class="block-title">
                        <h3>Clients</h3>
                    </div>

                    <div class="col-sm-4 col-md-2 subpage-block">
                        <div class="client-block">
                        <a href="#c" target="_blank"><img src={ }} alt="image" class="mCS_img_loaded"/></a>
                        </div>
                    </div>

                    <div class="col-sm-4 col-md-2 subpage-block">
                        <div class="client-block">
                            <a href="#" target="_blank"><img src="images/clients/client_2.png" alt="image" class="mCS_img_loaded"></img></a>
                        </div>
                    </div>

                    <div class="col-sm-4 col-md-2 subpage-block">
                        <div class="client-block">
                            <a href="#" target="_blank"><img src="images/clients/client_3.png" alt="image" class="mCS_img_loaded"></img></a>
                        </div>
                    </div>

                    <div class="col-sm-4 col-md-2 subpage-block">
                        <div class="client-block">
                            <a href="#" target="_blank"><img src="images/clients/client_4.png" alt="image" class="mCS_img_loaded"></img></a>
                        </div>
                    </div>

                    <div class="col-sm-4 col-md-2 subpage-block">
                        <div class="client-block">
                            <a href="#" target="_blank"><img src="images/clients/client_5.png" alt="image" class="mCS_img_loaded"></img></a>
                        </div>
                    </div>

                    <div class="col-sm-4 col-md-2 subpage-block">
                        <div class="client-block">
                            <a href="#" target="_blank"><img src="images/clients/client_6.png" alt="image" class="mCS_img_loaded"></img></a>
                        </div>
                    </div>
                </div>
            </div>
    </SubPage>
    
    
    
    
    
    
    
    
)

export default ServicesPage;

