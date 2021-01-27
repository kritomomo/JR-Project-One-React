// import './Item.css';
import imgURL from './assets/webdesign.png';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <div>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Axios"
          height="140"
          image={imgURL}
          title="Axios"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Using Axios with React
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Axios is an easy to use HTTP client. Learn how to use it within your react applications
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="https://www.digitalocean.com/community/tutorials/react-axios-react">
          Learn More   
        </Button>
      </CardActions>
      </Card>
      


      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Axios"
          height="140"
          image={imgURL}
          title="Axios"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Using Axios with React
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Axios is an easy to use HTTP client. Learn how to use it within your react applications
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href="https://www.digitalocean.com/community/tutorials/react-axios-react">
          Learn More   
        </Button>
      </CardActions>
    </Card>
</div>
    
  );
}




















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