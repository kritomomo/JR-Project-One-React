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
            <div className="contact-info-block" key={key}>
                <div className="ci-icon">
                    <FontAwesomeIcon icon={iconName} className="/>
                </div>
                <div class="ci-text">
                    <h5>{text}</h5>
                </div>
            </div>
        ))}
    </>
)

export default ContactInfo;