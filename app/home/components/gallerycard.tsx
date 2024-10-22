import { FunctionComponent } from 'react';
import styles from '../styles/gallerycard.module.css';
import Image from 'next/image';

const GalleryCard:FunctionComponent = () => {
  	return (
    		<div className={styles.cardGridTestimonials}>
      			<div className={styles.textContentHeading}>
        				<b className={styles.aMeldingPot}>A Melding Pot of Biodiversity, Culture and Natural Wonder</b>
      			</div>
      			<div className={styles.cardGrid}>
        				<Image className={styles.testimonialCardIcon} src="/images/Crocodile.jpg" alt='' width={300} height={300} />
                        <Image className={styles.testimonialCardIcon} src="/images/Hornbill.jpg" alt='' width={300} height={300} />
                        <Image className={styles.testimonialCardIcon} src="/images/Rafflesia.jpg" alt='' width={300} height={300} />
                        <Image className={styles.testimonialCardIcon} src="/images/Monkey.jpg" alt='' width={300} height={300} />
                        <Image className={styles.testimonialCardIcon} src="/images/Group.jpg" alt='' width={300} height={300} />
                        <Image className={styles.testimonialCardIcon} src="/images/Map.jpg" alt='' width={300} height={300} />
      			</div>
    		</div>);
};

export default GalleryCard;