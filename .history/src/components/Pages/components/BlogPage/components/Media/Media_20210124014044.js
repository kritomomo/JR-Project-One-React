import './Media.css';

const Media = ({
    items,
}) => (
    <div class="media-block">
        {items.map(({
            
        }))}
        <a href={postHtml} key={key}>
            <img class="post-image img-responsive" src={img} alt={blog-post-num}/>
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