// import './Item.css';
// import Media from '../Media';
// import imgURL from './assets/owl.JPG';

const Item = () => (
    <div class="item">
		<div class="blog-card">
			<div class="media-block">
				<a href="blog-post-1.html">
									<img class="post-image img-responsive" src="images/blog/blog_post_2.jpg" alt="blog-post-2" />
									<div class="mask"></div>
                    <div class="post-date">
                        <span class="day">3</span><span class="month">Nov</span><span class="year">2016</span></div>
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
)

// const Item = () => (
//     <div className="item">
//         <div className="blog-card">
//             <Media
//             items={[{
//                 postHtml:'https://github.com/kritomomo',
//                 img: 'imgURL',
//                 postNum: 'post',
//                 day: 'blog-post-1',
//                 month: 'Jan ',
//                 year: '2020 ',
//             }]}
//             />
//         </div>
//     </div>
// )

// export default Item;