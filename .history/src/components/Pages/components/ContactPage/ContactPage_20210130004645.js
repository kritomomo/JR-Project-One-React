import React from 'react';
import './ContactPage.css';
import Page from '../../../Page';
import PageTitle from '../../../PageTitle';
import ContactInfo from './components/ContactInfo';
import { faCheck, faEnvelopeOpen, faMapMarkerAlt, faPhoneAlt, } from '@fortawesome/free-solid-svg-icons';


const ContactPage = ({ 
	active,
}) => (
	<Page
		active={active}
		header={(<PageTitle title="Contact"/>)}
	>
		<div class="row">
			<div className="col-sm-6 col-md-6">
				<div className="block-title">
					<h3 className="f">Get in <span className="l">Touch</span></h3>
				</div>
										
				<div id="map" class="map"></div>

				<ContactInfo
					items={[{
						key: 'KEY',
						iconName: faMapMarkerAlt,
						text: 'Melbourne, Australia',
					}, {
						key: 'KEY',
						iconName: faEnvelopeOpen,
						text: 'robert.xu.owl@gmail.com',
					}, {
						key: 'KEY',
						iconName: faPhoneAlt,
						text: '+123 654 78900',
					}, {
						key: 'KEY',
						iconName: faCheck,
						text: 'Freelance Available',
					}]}
				/>
			</div>

			<div class="col-sm-6 col-md-6">
				<div class="block-title">
					<h3 className="f">Contact <span>Form</span></h3>
				</div>
									
				<form id="contact-form" method="post" action="contact_form/contact_form.php">

					<div class="messages"></div>

					<div class="controls">
						<div class="form-group form-group-with-icon">
													<i class="fa fa-user"></i>
													<label>Full Name</label>
													<input id="form_name" type="text" name="name" class="form-control" placeholder required="required" data-error="Name is required."/>
													<div class="form-control-border"></div>
													<div class="help-block with-errors"></div>
												</div>

							<div class="form-group form-group-with-icon">
													<i class="fa fa-envelope"></i>
													<label>Email Address</label>
													<input id="form_email" type="email" name="email" class="form-control" placeholder required="required" data-error="Valid email is required."/>
													<div class="form-control-border"></div>
													<div class="help-block with-errors"></div>
												</div>

							<div class="form-group form-group-with-icon">
													<i class="fa fa-comment"></i>
													<label>Message for Me</label>
													<textarea id="form_message" name="message" class="form-control" placeholder rows="4" required="required" data-error="Please, leave me a message."></textarea>
													<div class="form-control-border"></div>
													<div class="help-block with-errors"></div>
												</div>

							<div class="g-recaptcha" data-sitekey="6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI"></div>

							<input type="submit" class="button btn-send" value="Send message"/>
					</div>
				</form>
			</div>
		</div>
	</Page>
)

export default ContactPage;