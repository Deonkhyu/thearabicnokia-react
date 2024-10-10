import { FunctionComponent } from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import Logo from './assets/SFC Logo.jpg';
import XLogo from './assets/X Logo.svg';
import InstagramLogo from './assets/Instagram Logo.svg';
import YouTubeLogo from './assets/YouTube Logo.svg';

const Footer:FunctionComponent = () => {
  	return (
    		<div className={styles.footer}>
      			<div className={styles.title}>
                    <Image className={styles.sfcLogoIcon} src={Logo} alt="" />
        				<div className={styles.buttonList}>
                            <Image className={styles.socialStartIcon} src={XLogo} alt="" />
                            <Image className={styles.socialIcon} src={InstagramLogo} alt="" />
                            <Image className={styles.socialIcon} src={YouTubeLogo} alt="" />
        				</div>
      			</div>
      			<div className={styles.textLinkList}>
        				<div className={styles.title1}>
          					<div className={styles.textStrong}>
            						<b className={styles.textStrong1}>What we do</b>
          					</div>
        				</div>
        				<div className={styles.textLinkListItem}>
          					<div className={styles.listItem}>Rehabilitate</div>
        				</div>
        				<div className={styles.textLinkListItem}>
          					<div className={styles.listItem}>Research</div>
        				</div>
        				<div className={styles.textLinkListItem}>
          					<div className={styles.listItem}>Educate</div>
        				</div>
      			</div>
      			<div className={styles.textLinkList1}>
        				<div className={styles.title1}>
          					<div className={styles.textStrong}>
            						<b className={styles.textStrong1}>Sarawak Forestry</b>
          					</div>
        				</div>
        				<div className={styles.textLinkListItem}>
          					<div className={styles.listItem}>About us</div>
        				</div>
        				<div className={styles.textLinkListItem}>
          					<div className={styles.listItem}>Contact us</div>
        				</div>
        				<div className={styles.textLinkListItem}>
          					<div className={styles.listItem}>Privacy policy</div>
        				</div>
      			</div>
      			<div className={styles.textLinkList2}>
        				<div className={styles.textLinkListItem6}>
          					<div className={styles.listItem}>
            						<p className={styles.operatingHours}>Operating hours:</p>
            						<p className={styles.operatingHours}>Monday - Thursday</p>
            						<p className={styles.operatingHours}>{`8:00 am - 1:00 pm & 2:00 pm - 5:00 pm`}</p>
            						<p className={styles.operatingHours}>&nbsp;</p>
            						<p className={styles.operatingHours}>Friday:</p>
            						<p className={styles.operatingHours}>{`8:00 am - 12;00 pm & 2:00 pm - 5:00 pm`}</p>
            						<p className={styles.operatingHours}>&nbsp;</p>
            						<p className={styles.operatingHours}>{`Saturday, Sunday & Holidays:`}</p>
            						<p className={styles.operatingHours}>Closed</p>
          					</div>
        				</div>
        				<div className={styles.title3}>
          					<div className={styles.textStrong}>
            						<b className={styles.textStrong1}>Visit us</b>
          					</div>
        				</div>
      			</div>
    		</div>);
};

export default Footer;