import { FunctionComponent } from 'react';
import styles from '../styles/aboutheader.module.css';

const AboutHeader:FunctionComponent = () => {
  	return (
    		<div className={styles.heroBasic}>
      			<div className={styles.textContentTitle}>
        				<b className={styles.title}>About Us</b>
      			</div>
    		</div>);
};

export default AboutHeader;