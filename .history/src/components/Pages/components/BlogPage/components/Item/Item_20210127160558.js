import './Item.css';
import Card from 'react-bootstrap/Card'
import imgURL from '../../assets/webdesign.png';

const Item = ({
    items,
}) => (
    <>
        {items.map(({
            key,
            // img,
            url,
            title,
            text,
            footer,
        }) => (
            <R
                <Card className='text-center' key={key}>
                <Card.Img variant="top" src={imgURL} />
                <Card.Body>
                    <Card.Title href={url}>{title}</Card.Title>
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