import './Media.css';

const Media = () => (
    <div class="media-block">
        <a href="blog-post-1.html">
            <img class="post-image img-responsive" src={img} alt={blog - post}/>
            <div class="mask"></div>
            <div class="post-date">
                <span class="day">{day} </span>
				<span class="month">{month} </span>
                <span class="year">{year}</span>
            </div>
        </a>
    </div>
)

export default Media;