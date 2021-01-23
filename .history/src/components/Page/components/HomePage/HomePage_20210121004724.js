import React from 'react'; 


const HomePage = () => (
    <section>
        <div class="home-header page-header">
                                <img class="home-avatar" src="src/assets/imgs/Bowsy.png" alt="Bowsy">
                                <div class="home-info"> 
                                    <div class="home-title">Bowser Jr</div>
                                    <!-- carousel -->
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
                                    <!-- social media icons -->
                                    <div class="home-socialLinks">
                                        <i class="fa fa-twitter media" aria-hidden="true"></i>
                                        <i class="fa fa-facebook media" aria-hidden="true"></i>
                                        <i class="fa fa-instagram media" aria-hidden="true"></i>
                                    </div> 
                                </div>
                        </div>
                        <div class="home-content page-content">
                                <div class="home-content_left">
                                    <div class="home-content-aboutMe">
                                        <h3 class="home_about">About
                                            <span class="home_me">Me</span>
                                        </h3>                                       
                                    </div>
                                    <div class="home-content-aboutMeContemt">
                                        <p>Bowser Jr. made his debut in Super Mario Sunshine and has since helped his father to kidnap Princess Peach and battle Mario and Luigi in many subsequent games. Bowser Jr. has also taken on playable roles in spin-off titles such as Mario Superstar Baseball and Mario Strikers Charged. </p>
                                    </div>
                                </div>
                                <div class="home-content_right">
                                    <div class="home_info">
                                        <dl class="dl-horizontal">
                                            <dt>Age</dt>
                                            <dd>20</dd>
                                            <dt>Residence</dt>
                                            <dd>Australia</dd>
                                            <dt>Address</dt>
                                            <dd>105 Batman St,West Melbourne</dd>
                                            <dt>e-mail</dt>
                                            <dd class="email">bowser@gmail.com</dd>
                                            <dt>Phone</dt>
                                            <dd>+0123 123 456 789</dd>
                                        </dl>
                                    </div>
                                </div>
                        </div>
    </section>
)

export default HomePage;