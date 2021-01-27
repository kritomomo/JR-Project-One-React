import './Services.css';

const Services = () => (
    <div class="serviceItem">
        <div class="serviceItem__imageContainer">
            <img alt="imgDesc" src={img} class="serviceItem__image" />
        </div>                     
            <h4 class="serviceItem__name">{title}</h4>
            <div class="serviceItem__description">Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.</div>
    </div>
)

export default Services;