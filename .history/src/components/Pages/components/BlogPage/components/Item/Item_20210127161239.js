import './Item.css';
import Card from 'react-bootstrap/Card'
import imgURL from '../../assets/webdesign.png';
import Row from 'react-bootstrap/Row'

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
            <Row>
                <Col>
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