import './Media.css';

const Media = () => (
    <div class="media-block">
        <a href="blog-post-1.html">
            <img class="post-image img-responsive" src="images/blog/blog_post_1.jpg" alt="blog-post-1"/>
            <div class="mask"></div>
            <div class="post-date">
                <span class="day">{day} </span>
				<span class="month">{month} </span>
			    <span class="year">2020</span>
            </div>
        </a>
    </div>
)

export default Media;