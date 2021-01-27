import './Item.css';
import Card from 'react-bootstrap/Card'
import imgURL from '../../assets/webdesign.png';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
            <Row lg={6}>
                <Col xs={12} lg={6}>
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
                </Col>
            </Row>
            ))}		
    </>
)

export default Item;