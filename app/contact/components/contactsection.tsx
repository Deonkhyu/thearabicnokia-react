import { FunctionComponent } from 'react';
import styles from '../styles/contactsection.module.css';


const ContactSection:FunctionComponent = () => {
  	return (
    		<div className={styles.contactSection}>
      			<div className={styles.contactBanner}>
        				<div className={styles.textContentTitle}>
          					<b className={styles.title}>Contact Us</b>
          					<div className={styles.subtitle}>Share your experience with us!</div>
        				</div>
      			</div>
      			<div className={styles.fullContactForm}>
        				<div className={styles.contactForm}>
          					<div className={styles.contactForm1}>Contact Form</div>
          					<div className={styles.inputField}>
            						<div className={styles.label}>First Name</div>
            						<div className={styles.input}>
              							<div className={styles.value}>First Name</div>
            						</div>
          					</div>
          					<div className={styles.inputField}>
            						<div className={styles.label}>Last Name</div>
            						<div className={styles.input}>
              							<div className={styles.value}>Last Name</div>
            						</div>
          					</div>
          					<div className={styles.inputField2}>
            						<div className={styles.label}>Email</div>
            						<div className={styles.input}>
              							<div className={styles.value}>Email</div>
            						</div>
          					</div>
          					<div className={styles.inputField}>
            						<div className={styles.label}>Message</div>
            						<div className={styles.textarea}>
              							<div className={styles.value3}>Message</div>
            						</div>
          					</div>
          					<div className={styles.buttonGroup}>
            						<div className={styles.button}>
              							<div className={styles.button1}>Submit</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.contactDetails}>
          					<div className={styles.contactDetailsTitle}>
            						<div className={styles.contactDetails1}>Contact Details</div>
          					</div>
          					<div className={styles.contactDetails2}>
            						<div className={styles.contactInformation}>
              							<div className={styles.label}>
                								<p className={styles.phone}>
                  									<b>Phone</b>
                								</p>
                								<p className={styles.phone}>General: (+6) 082-610088</p>
                								<p className={styles.phone}>Toll-Free: 1800-88-2526</p>
              							</div>
            						</div>
            						<svg className={styles.lineSeparatorIcon}>
										<line x1="0" y1="0" x2="300" y2="0" />
									</svg>
            						<div className={styles.contactInformation}>
              							<div className={styles.label}>
                								<p className={styles.phone}>
                  									<b>Fax</b>
                								</p>
                								<p className={styles.phone}>(+6) 082-610099</p>
              							</div>
            						</div>
            						<svg className={styles.lineSeparatorIcon}>
										<line x1="0" y1="0" x2="300" y2="0" />
									</svg>
            						<div className={styles.contactInformation}>
              							<div className={styles.label}>
                								<p className={styles.phone}>
                  									<b>Email</b>
                								</p>
                								<p className={styles.phone}>info@sarawakforestry.com</p>
              							</div>
            						</div>
            						<svg className={styles.lineSeparatorIcon}>
										<line x1="0" y1="0" x2="300" y2="0" />
									</svg>
            						<div className={styles.contactInformation}>
              							<div className={styles.label}>
                								<p className={styles.phone}>
                  									<b>Address</b>
                								</p>
                								<p className={styles.phone}>Lot 218, KCLD, Jalan Tapang, Kota Sentosa , 93250 Kuching, Sarawak, Malaysia</p>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
    		</div>);
};

export default ContactSection;