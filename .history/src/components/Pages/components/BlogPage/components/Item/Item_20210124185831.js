// import './Item.css';
// import Media from '../Media';
// import imgURL from './assets/owl.JPG';

const Item = ({
    items,
}) => (
    <div class="item">
        <div class="blog-card">
            {items.map(({

            }) => (
			<div class="media-block" key={key}>
				<a href={href}>
					<img class="post-image img-responsive" src={imgURL} alt={alt} />
					<div class="mask"></div>
                    <div class="post-date">
                        <span class="day">{day}</span>
                        <span class="month">{month}</span>
                        <span class="year">{year}</span>
                    </div>
				</a>
			</div>
			<div class="post-info">
				<ul class="category">
                    <li>
                        <a href="#j">{categoryName}</a>
                    </li>
				</ul>
                <a href={href}>
                    <h4 class="blog-item-title">{title}</h4>
                </a>
            </div>
             )

		</div>
	</div>
)

// const Item = () => (
//     <div className="item">
//         <div className="blog-card">
//             <Media
//             items={[{
//                 postHtml:'https://github.com/kritomomo',
//                 img: 'imgURL',
//                 postNum: 'post',
//                 day: 'blog-post-1',
//                 month: 'Jan ',
//                 year: '2020 ',
//             }]}
//             />
//         </div>
//     </div>
// )

// export default Item;