// import './Item.css';
// import Media from '../Media';
// import imgURL from './assets/owl.JPG';

const Item = ({
    items,
}) => (
    <div class="item">
        <div class="blog-card">
            {items.map(({
                key,
                href,
                imgURL,
                alt,
                day,
                month,
                year,
                categoryName,
                href,
                title,
            }) => (

            ))}

            

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