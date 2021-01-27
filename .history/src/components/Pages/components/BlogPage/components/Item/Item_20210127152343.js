import './Item.css';
import Card from 'react-bootstrap/Card'


const Item = ({
    items,
}) => (
    <div class="item">
        
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
	</div>
)


// export default Item;