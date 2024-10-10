import { FunctionComponent } from 'react';
import styles from './gallerycard.module.css';
import Image from 'next/image';
import Crocodile from './assets/Crocodile.jpg';
import Group from './assets/Group.jpg';
import Hornbill from './assets/Hornbill.jpg';
import Map from './assets/Map.jpg';
import Monkey from './assets/Monkey.jpg';
import Rafflesia from './assets/Rafflesia.jpg';

const GalleryCard:FunctionComponent = () => {
  	return (
    		<div className={styles.cardGridTestimonials}>
      			<div className={styles.textContentHeading}>
        				<b className={styles.aMeldingPot}>A Melding Pot of Biodiversity, Culture and Natural Wonder</b>
      			</div>
      			<div className={styles.cardGrid}>
        				<Image className={styles.testimonialCardIcon} src={Monkey} alt='' />
                        <Image className={styles.testimonialCardIcon} src={Hornbill} alt='' />
                        <Image className={styles.testimonialCardIcon} src={Rafflesia} alt='' />
                        <Image className={styles.testimonialCardIcon} src={Crocodile} alt='' />
                        <Image className={styles.testimonialCardIcon} src={Group} alt='' />
                        <Image className={styles.testimonialCardIcon} src={Map} alt='' />
      			</div>
    		</div>);
};

export default GalleryCard;