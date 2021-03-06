import React from 'react'; 
import 
import imgURL from './assets/Bowsy.png';

const HomePage = () => (
    <div class="pt-page" data-id="home">
        <div class="section-inner start-page-content">
            
            <div class="page-header">
                <div class="row">
                    <div class="col-sm-4 col-md-4 col-lg-4">
						<div class="photo">
							<img src={imgURL} alt=""></img>
						</div>
                    </div>
					<div class="col-sm-8 col-md-8 col-lg-8">
						<div class="title-block">
							<h1>John Doe</h1>
							<div class="owl-carousel text-rotation">
								<div class="item">
									<div class="sp-subtitle">Web Designer</div>
								</div>
								<div class="item">
									<div class="sp-subtitle">Frontend-developer</div>
								</div>
							</div>
						</div>
						<div class="social-links">
							<a href="#"><i class="fa fa-twitter"></i></a>
							<a href="#"><i class="fa fa-facebook"></i></a>
							<a href="#"><i class="fa fa-instagram"></i></a>
						</div>
					</div>
				</div>
            </div>
			
            <div class="page-content">
				<div class="row">
                    <div class="col-sm-6 col-md-6 col-lg-6">
						<div class="about-me">
							<div class="block-title">
								<h3>About <span>Me</span></h3>
							</div>
							<p>Hello! I’m John Doe. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum ullamcorper sem, at placerat dolor volutpat ac. Duis nulla enim, condimentum nec ultricies.</p>
						</div>
					</div>
					<div class="col-sm-6 col-md-6 col-lg-6">
						<ul class="info-list">
							<li><span class="title">Age</span><span class="value">29</span></li>
							<li><span class="title">Residence</span><span class="value">Australia</span></li>
							<li><span class="title">Address</span><span class="value">Level 3 / 57 Coronation Drive, Brisbane</span></li>
							<li><span class="title">e-mail</span><span class="value"><a href="mailto:email@example.com">info@jiangren.com.au</a></span></li>
							<li><span class="title">Phone</span><span class="value">+0123 123 456 789</span></li>
						</ul>
					</div>
				</div>
			</div>
        
        </div>
    </div>
)

export default HomePage;