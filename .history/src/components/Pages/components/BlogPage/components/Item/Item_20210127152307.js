import './Item.css';
import Card from 'react-bootstrap/Card'

const Item = ({
    items,
}) => (
    {items.map(({
        key,
        imgURL,
        title,
        text,
        footer,
    }) => (
        <Card key={key}>
            <Card.Img variant="top" src={imgURL} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{footer}</small>
            </Card.Footer>   
        </Card>
    ))}
)

    









const Item = ({
    items,
}) => (
    <div class="item">
        
            {items.map(({
                key,
                href,
                imgURL,
                alt,
                day,
                month,
                year,
                categoryName,
                title,
            }) => (
                <div class="blog-card" key={key}>
                    <div class="media-block" >
                        <a href={href}>
                        <img class="post-image img-responsive" src={imgURL} alt={alt} />
                        <div class="mask"></div>
                        <div class="post-date">
                            <span class="day">{day}</span>
                            <span class="month">{month}</span>
                            <span class="year">{year}</span>
                        </div>
				    </a>
			        </div>
			        <div class="post-info">
                        <ul class="category">
                            <li>
                                <a href="#j">{categoryName}</a>
                            </li>
                        </ul>
                        <a href={href}>
                            <h4 class="blog-item-title">{title}</h4>
                        </a>
                    </div>
                </div>
            ))}		
	</div>
)


// export default Item;