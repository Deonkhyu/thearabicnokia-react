import { FunctionComponent } from 'react';
import styles from '../styles/aboutreviews.module.css';


const AboutReviews:FunctionComponent = () => {
  	return (
    		<div className={styles.cardGridContentList}>
      			<div className={styles.textContentHeading}>
        				<div className={styles.reviews}>Reviews</div>
        				<div className={styles.subheading}>See what our visitors say about us</div>
      			</div>
      			<div className={styles.cards}>
        				<div className={styles.card}>
          					<img className={styles.imageIcon} alt="" src="/images/Toni Thompson.jpeg" />
          					<div className={styles.body}>
            						<div className={styles.text}>
              							<div className={styles.reviews}>Toni Thompson</div>
              							<div className={styles.whatAGreat}>What a great place to enjoy orangutans in a semi-natural environment. They play, show off, swing on the ropes and trees, to offer a view of their daily lives. The rangers are very attentive to the safety of the primates and visitors. At one point, we needed to move out of the area until 2 orangutans moved out of the visitor space. This is about 1 10 minute walk and a paid tram is available. Most of the area is wheelchair accessible. Small souvenir area with water for purchase. So awesome to see orangutans up so close.</div>
            						</div>
            						<div className={styles.buttonGroup} />
          					</div>
        				</div>
        				<div className={styles.card}>
          					<img className={styles.imageIcon} alt="" src="/images/Werner Luzi.jpeg" />
          					<div className={styles.body1}>
            						<div className={styles.text}>
              							<div className={styles.reviews}>Werner Luzi</div>
              							<div className={styles.whatAGreat}>Great place to see semi-wild orangutans. Orangutan sightings not guaranteed and lower probability during the fruiting season, but I have been lucky every time I visited so far. You can either walk or take an electric buggy from the entrance to the feeding area.</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.card}>
          					<img className={styles.imageIcon} alt="" src="/images/Andrew Chew.jpeg" />
          					<div className={styles.body1}>
            						<div className={styles.text}>
              							<div className={styles.reviews}>Andrew Chew</div>
              							<div className={styles.whatAGreat}>
                								<p className={styles.openingTimesAre}>Opening times are strictly as stated.</p>
                								<p className={styles.openingTimesAre}>I arrived 1.30pm but the ticket counter opens 2pm for the 2 to pm session.</p>
                								<p className={styles.openingTimesAre}>&nbsp;</p>
                								<p className={styles.openingTimesAre}>RM10 entry ticke for foreigners. The feeding areas are about 1km inside. You either walk the hilly road or pay RM15 for a 2 way buggy ride.</p>
                								<p className={styles.openingTimesAre}>&nbsp;</p>
                								<p className={styles.openingTimesAre}>I managed to see 5 orangutans up close, at the 2 feeding locations and the resting hut.</p>
                								<p className={styles.openingTimesAre}>55 years old Grandmother, Alpha male, 2 daughters, and a young 8 years kid.</p>
              							</div>
            						</div>
          					</div>
        				</div>
      			</div>
    		</div>);
};

export default AboutReviews;