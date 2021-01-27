import './Item.css';
import Card from 'react-bootstrap/Card'

const Item = ({
    items,
}) => (
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
            }) => 
    <Card key={key}>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
        <Card.Title>Using Axios with React</Card.Title>
        <Card.Text>
        Axios is an easy to use HTTP client. Learn how to use it within your React applications.
        </Card.Text>
    </Card.Body>
    <Card.Footer>
        <small className="text-muted">Published onJanuary 23, 2018</small>
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