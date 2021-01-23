import './Item.css';
import Media from '../Media';
import imgURL from './assets/owl.JPG';

const Item = () => (
    <div className="item">
        <div className="blog-card">
            <Media
            items={[{
                postHtml:'https://github.com/kritomomo',
                img: 'imgURL',
                postNum
                day: '01 '
                month: 'Jan '
                year: '2020 '
            }]}
            />
        </div>
    </div>
)

export default Item;