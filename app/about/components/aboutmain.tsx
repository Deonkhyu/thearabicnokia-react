import { FunctionComponent } from 'react';
import styles from '../styles/aboutmain.module.css';


const AboutMain:FunctionComponent = () => {
  	return (
    		<div className={styles.panelImageDouble}>
      			<img className={styles.imageIcon} alt="" src="/images/About Main Image.jpeg" />
      			<div className={styles.protectingStrivingToRehabilWrapper}>
        				<div className={styles.protectingStrivingToContainer}>
          					<p className={styles.protecting}>
            						<span>
              							<b>Protecting</b>
            						</span>
          					</p>
          					<p className={styles.strivingToRehabilitateInjur}>
            						<span>
              							<span>{`Striving to rehabilitate injured or captive animals for release back into the wild. `}</span>
            						</span>
          					</p>
          					<p className={styles.protecting}>
            						<span>
              							<span>&nbsp;</span>
            						</span>
          					</p>
          					<p className={styles.protecting}>
            						<span>
              							<b>Research</b>
            						</span>
          					</p>
          					<p className={styles.strivingToRehabilitateInjur}>
            						<span>
              							<span>Conducting wildlife research and breeding programs for endangered species.</span>
            						</span>
          					</p>
          					<p className={styles.protecting}>
            						<span>
              							<span>&nbsp;</span>
            						</span>
          					</p>
          					<p className={styles.protecting}>
            						<span>
              							<b>Educating</b>
            						</span>
          					</p>
          					<p className={styles.strivingToRehabilitateInjur}>
            						<span>
              							<span>Educating the public on the importance of conserving the beautiful and bountiful nature of Sarawak</span>
            						</span>
            						<span>
              							<span className={styles.span}>.</span>
            						</span>
          					</p>
        				</div>
      			</div>
    		</div>);
};

export default AboutMain;