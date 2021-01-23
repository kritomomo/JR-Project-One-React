import React from 'react'; 
import './HomePage.css';
import imgURL from './assets/Bowsy.png';
import SubPage from '../SubPage';
import SubPage from '../SubPage';

const HomePage = () => (
	<SubPage header={
		(
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
							<a href="#t"><i class="fa fa-twitter"></i></a>
							<a href="#f"><i class="fa fa-facebook"></i></a>
							<a href="#i"><i class="fa fa-instagram"></i></a>
						</div>
					</div>
				</div>
		)
	}>
		

	</SubPage>

    <div class="pt-page" data-id="home">
        <div class="section-inner start-page-content">
            
            <div class="page-header">
                
            </div>
			
           
        
        </div>
    </div>
)

export default HomePage;