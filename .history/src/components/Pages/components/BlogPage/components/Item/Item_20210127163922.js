import './Item.css';
import Card from 'react-bootstrap/Card'
import imgURL from '../../assets/webdesign.png';
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

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
        
            <Col lg={6} md={} xs={12} className="size">
                <Card className='text-center blog-card' key={key}>
                    <Card.Img className="post-image" variant="top" src={imgURL} />
                <Card.Body className="post-info">
                    <Card.Title >{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <Button variant="primary" href={url}>Go somewhere</Button>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{footer}</small>
                </Card.Footer>   
                </Card>
                </Col>
            
            ))}		
    </>
)

export default Item;