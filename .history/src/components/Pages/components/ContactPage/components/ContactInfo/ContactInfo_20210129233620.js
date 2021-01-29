import './ContactInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactInfo = ({
    items,
}) => (
    <>
        {items.map(({
            key,
            iconName,
            text,
        }) => (
            <div class="contact-info-block" key={key}>
                <div class="ci-icon">
                    <FontAwesomeIcon icon={iconName} />
                </div>
                <div class="ci-text">
                    <h5>{text}</h5>
                </div>
            </div>
        ))}
    </>
)

export default ContactInfo;