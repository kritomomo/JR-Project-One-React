import React from 'react';
import './BlogPage.css';
import Page from '../../../Page';
import PageTitle from '../../../PageTitle';

const BlogPage = ({ 
	active,
}) => (
	<Page 
   active={active}
   header={(<PageTitle title="Blog"/>)}
   >
		<div class="blog-masonry two-columns">
									
				<div class="item">
				<div class="blog-card">
					
						<div class="media-block">
							<a href="blog-post-1.html">
								<img class="post-image img-responsive" src="images/blog/blog_post_1.jpg" alt="blog-post-1" />
								<div class="mask"></div>
								<div class="post-date"><span class="day">1 </span><span class="month">Jan </span><span class="year">2020</span></div>
							</a>
						</div>
					
						<div class="post-info">
							<ul class="category">
								<li><a href="#t">Travel</a></li>
							</ul>
							<a href="blog-post-1.html"><h4 class="blog-item-title">Bootstrap is the Most Popular Framework</h4></a>
						</div>
					
					</div>
				</div>

<div className="item">
	<div className="blog card">
					
	</div>
</div>

									
				<div class="item">
					<div class="blog-card">
						<div class="media-block">
							<a href="blog-post-1.html">
									<img class="post-image img-responsive" src="images/blog/blog_post_2.jpg" alt="blog-post-2" />
									<div class="mask"></div>
									<div class="post-date"><span class="day">3</span><span class="month">Nov</span><span class="year">2016</span></div>
								</a>
						</div>
						<div class="post-info">
							<ul class="category">
								<li><a href="#j">jQuery</a></li>
							</ul>
							<a href="blog-post-1.html"><h4 class="blog-item-title">One Framework, Every Device</h4></a>
						</div>
					</div>
				</div>
									

									
				<div class="item">
										<div class="blog-card">
											<div class="media-block">
												<a href="blog-post-1.html">
													<img class="post-image img-responsive" src="images/blog/blog_post_3.jpg" alt="blog-post-3" />
													<div class="mask"></div>
													<div class="post-date"><span class="day">12</span><span class="month">Oct</span><span class="year">2016</span></div>
												</a>
											</div>
											<div class="post-info">
												<ul class="category">
													<li><a href="#s">Sport</a></li>
												</ul>
												<a href="blog-post-1.html"><h4 class="blog-item-title">Designed for Everyone, Everywhere</h4></a>
											</div>
										</div>
									</div>
									

									
				<div class="item">
										<div class="blog-card">
											<div class="media-block">
												<a href="blog-post-1.html">
													<img class="post-image img-responsive" src="images/blog/blog_post_4.jpg" alt="blog-post-4" />
													<div class="mask"></div>
													<div class="post-date"><span class="day">18</span><span class="month">Aug</span><span class="year">2016</span></div>
												</a>
											</div>
											<div class="post-info">
												<ul class="category">
													<li><a href="#c">CSS</a></li>
												</ul>
												<a href="blog-post-1.html"><h4 class="blog-item-title">An Introduction To PostCSS</h4></a>
											</div>
										</div>
									</div>
									

									
				<div class="item">
										<div class="blog-card">
											<div class="media-block">
												<a href="blog-post-1.html">
													<img class="post-image img-responsive" src="images/blog/blog_post_5.jpg" alt="blog-post-5" />
													<div class="mask"></div>
													<div class="post-date"><span class="day">2</span><span class="month">Jul</span><span class="year">2016</span></div>
												</a>
											</div>
											<div class="post-info">
												<ul class="category">
													<li><a href="#c">CSS3</a></li>
												</ul>
												<a href="blog-post-1.html"><h4 class="blog-item-title">Original and Innovative Web Layouts</h4></a>
											</div>
										</div>
									</div>
									

									
				<div class="item">
										<div class="blog-card">
											<div class="media-block">
												<a href="blog-post-1.html">
													<img class="post-image img-responsive" src="images/blog/blog_post_6.jpg" alt="blog-post-6" />
													<div class="mask"></div>
													<div class="post-date"><span class="day">8</span><span class="month">May</span><span class="year">2016</span></div>
												</a>
											</div>
											<div class="post-info">
												<ul class="category">
													<li><a href="#h">HTML5</a></li>
												</ul>
												<a href="blog-post-1.html"><h4 class="blog-item-title">Creative and Innovative Navigation Designs</h4></a>
											</div>
										</div>
									</div>
									

		</div>
	</Page>
	
    
)

export default BlogPage;