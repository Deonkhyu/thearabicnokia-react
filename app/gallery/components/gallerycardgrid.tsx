import { FunctionComponent } from 'react';
import styles from '../styles/gallerycardgrid.module.css';


const GalleryCardGrid:FunctionComponent = () => {
  	return (
    		<div className={styles.cardGridTestimonials}>
      			<div className={styles.cardGrid}>
        				<img className={styles.testimonialCardIcon} alt="" src="/images/Gallery Card 1.jpg" />
        				<img className={styles.testimonialCardIcon} alt="" src="/images/Gallery Card 2.png" />
        				<img className={styles.testimonialCardIcon} alt="" src="/images/Gallery Card 3.jpeg" />
        				<img className={styles.testimonialCardIcon} alt="" src="/images/Gallery Card 4.jpeg" />
        				<img className={styles.testimonialCardIcon4} alt="" src="/images/Gallery Card 5.jpeg" />
        				<img className={styles.testimonialCardIcon5} alt="" src="/images/Gallery Card 6.jpeg" />
        				<img className={styles.testimonialCardIcon6} alt="" src="/images/Gallery Card 7.jpeg" />
        				<img className={styles.testimonialCardIcon7} alt="" src="/images/Gallery Card 8.jpeg" />
        				<img className={styles.testimonialCardIcon6} alt="" src="/images/Gallery Card 9.jpeg" />
      			</div>
    		</div>);
};

export default GalleryCardGrid;