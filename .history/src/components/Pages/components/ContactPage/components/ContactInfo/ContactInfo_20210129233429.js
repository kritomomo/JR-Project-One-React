import './ContactInfo.css';

const ContactInfo = ({
    items,
}) => (
    <>
        {items.map(({
            key,
            icon,
            text,
        }) => (
            <div class="contact-info-block" key={key}>
                <div class="ci-icon">
                    <i class="fa fa-envelope"></i>
                </div>
                <div class="ci-text">
                    <h5>{text}</h5>
                </div>
            </div>
        ))}

    </>
)

export default ContactInfo;