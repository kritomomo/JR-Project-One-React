import './ServicesItem.css';
import url from './assets/html5.png'


const ServicesItem = () = {
    <div>
        <h1>child-page</h1>
        <p>{this.props.id}</p>
    </div>
}


// const ServicesItem = ({
//     items,
// }) => (
//     <>
//         {items.map(({
//             key,
//             imgDesc,
//             img,
//             title,
//             text,
//         }) => (
//         <div class="serviceItem" key={key}>
//             <div class="serviceItem__imageContainer">
//                 <img alt={imgDesc} src={img} class="serviceItem__image" />
//             </div>                     
//                 <h4 class="serviceItem__name">{title}</h4>
//             <div class="serviceItem__description">{text}</div>
//         </div>
//         ))}	    
//     </>
// )

export default ServicesItem;