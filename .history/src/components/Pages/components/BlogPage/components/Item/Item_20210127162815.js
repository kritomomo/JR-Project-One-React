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
            // <Row lg={4}>
            <Col lg={6} xs={12} className="size">
                <Card className='text-center' key={key}>
                <Card.Img variant="top" src={imgURL} />
                <Card.Body>
                    <Card.Title >{title}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <Button variant="primary" href={url}>Go somewhere</Button>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{footer}</small>
                </Card.Footer>   
                </Card>
                </Col>
            // </Row>
            ))}		
    </>
)

export default Item;