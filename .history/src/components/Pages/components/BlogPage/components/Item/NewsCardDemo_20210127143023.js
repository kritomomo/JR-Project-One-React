// import './Item.css';

import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ChevronRightRounded from '@material-ui/icons/ChevronRightRounded';
// import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useWideCardMediaStyles } from '@mui-treasury/styles/cardMedia/wide';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 304,
    margin: 'auto',
    boxShadow: 'none',
    borderRadius: 0,
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
}));

export const NewsCardDemo = React.memo(function NewsCard() {
  const styles = useStyles();
  const mediaStyles = useWideCardMediaStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  const shadowStyles = useBouncyShadowStyles();
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia
        classes={mediaStyles}
        image={
          'https://images.unsplash.com/photo-1468774871041-fc64dd5522f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80'
        }
      />
      <CardContent className={styles.content}>
        <TextInfoContent
          classes={textCardContentStyles}
          overline={'March 20, 2019'}
          heading={'What happened in Thailand?'}
          body={
            'Kayaks crowd Three Sisters Springs, where people and manatees maintain controversial coexistence.'
          }
        />
        <Button color={'primary'} fullWidth className={styles.cta}>
          Find Out More <ChevronRightRounded />
        </Button>
      </CardContent>
    </Card>
  );
});

export default NewsCardDemo



















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