import React from 'react';
import './ServicesItem.css';
import url from './assets/html5.png'


class ServicesItem extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <div>
                <p>{this.props.id}</p>
                <div class="serviceItem" key={this.props.key}>
                <div class="serviceItem__imageContainer">
                <img alt={this.propsimgDesc} src={img} class="serviceItem__image" />
                </div>                     
                <h4 class="serviceItem__name">{title}</h4>
                <div class="serviceItem__description">{text}</div>
                </div>
            </div>
        );
      }
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