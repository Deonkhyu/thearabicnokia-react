import { FunctionComponent } from 'react';
import styles from '../styles/gallerybanner.module.css';


const GalleryBanner:FunctionComponent = () => {
  	return (
    		<div className={styles.section}>
      			<div className={styles.gallery}>Gallery</div>
    		</div>);
};

export default GalleryBanner;