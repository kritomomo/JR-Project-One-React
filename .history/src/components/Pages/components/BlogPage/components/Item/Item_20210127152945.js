import './Item.css';
import Card from 'react-bootstrap/Card'


const Item = ({
    items,
}) => (
    <>
        {items.map(({
            key,
            // imgURL,
            title,
            text,
            footer,
            }) => (
                <Card key={key}>
                <Card.Img variant="top" src={} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{footer}</small>
                </Card.Footer>   
            </Card>
            ))}		
    </>
)

export default Item;