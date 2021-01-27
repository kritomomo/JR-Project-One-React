import './Item.css';
import Card from 'react-bootstrap/Card'

const Item = ({
    items,
}) => (
    <Card>

    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
        <Card.Title>Use Axios with React</Card.Title>
        <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
        </Card.Text>
    </Card.Body>
    <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
        
  </Card>
)

export default Item;
    









// const Item = ({
//     items,
// }) => (
//     <div class="item">
        
//             {items.map(({
//                 key,
//                 href,
//                 imgURL,
//                 alt,
//                 day,
//                 month,
//                 year,
//                 categoryName,
//                 title,
//             }) => (
//                 <div class="blog-card" key={key}>
//                     <div class="media-block" >
//                         <a href={href}>
//                         <img class="post-image img-responsive" src={imgURL} alt={alt} />
//                         <div class="mask"></div>
//                         <div class="post-date">
//                             <span class="day">{day}</span>
//                             <span class="month">{month}</span>
//                             <span class="year">{year}</span>
//                         </div>
// 				    </a>
// 			        </div>
// 			        <div class="post-info">
//                         <ul class="category">
//                             <li>
//                                 <a href="#j">{categoryName}</a>
//                             </li>
//                         </ul>
//                         <a href={href}>
//                             <h4 class="blog-item-title">{title}</h4>
//                         </a>
//                     </div>
//                 </div>
//             ))}		
// 	</div>
// )


// export default Item;