import './Services.css';

const Services = ({
    items,
}) => (
    <>
        <div class="serviceItem">
            <div class="serviceItem__imageContainer">
                <img alt={imgDesc} src={img} class="serviceItem__image" />
            </div>                     
                <h4 class="serviceItem__name">{title}</h4>
            <div class="serviceItem__description">{desc}</div>
        </div>
    </>
)

export default Services;