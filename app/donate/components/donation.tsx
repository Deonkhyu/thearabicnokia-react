import { FunctionComponent } from 'react';
import styles from '../styles/donation.module.css';


const Donation:FunctionComponent = () => {
  	return (
    		<div className={styles.donation}>
      			<div className={styles.legend}>
        				<div className={styles.makeADonation}>Make a donation to help our work today</div>
        				<div className={styles.text}>
          					<div className={styles.semenggohNatureReserve}>{`Semenggoh Nature Reserve of Sarawak aims to rehabilitate injured or captive animals for release into the wild, conduct wildlife research and breeding programs for endangered species and educate the public on conservation. If you wish to support our cause then please feel free to donate to us below. `}</div>
        				</div>
      			</div>
      			<div className={styles.legend1}>
        				<div className={styles.makeADonation}>Billing Address</div>
      			</div>
      			<div className={styles.inputField}>
        				<div className={styles.fullName}>Full Name</div>
        				<div className={styles.input}>
          					<div className={styles.value}>Value</div>
        				</div>
        				<div className={styles.error}>Error</div>
      			</div>
      			<div className={styles.selectField}>
        				<div className={styles.location}>Location</div>
        				<div className={styles.select}>
          					<div className={styles.value1}>Value</div>
          					<img className={styles.chevronDownIcon} alt="" src="Chevron down.svg" />
          					<div className={styles.options}>
            						<div className={styles.helloWorld}>Hello World</div>
            						<div className={styles.option2}>Option 2</div>
            						<div className={styles.option2}>Option 3</div>
            						<div className={styles.option2}>Option 4</div>
            						<div className={styles.option2}>Option 5</div>
          					</div>
        				</div>
        				<div className={styles.options}>
          					<div className={styles.helloWorld}>Value</div>
          					<div className={styles.option2}>Option 2</div>
          					<div className={styles.option2}>Option 3</div>
          					<div className={styles.option2}>Option 4</div>
          					<div className={styles.option2}>Option 5</div>
        				</div>
      			</div>
      			<div className={styles.inputField}>
        				<div className={styles.fullName}>Address</div>
        				<div className={styles.textarea}>
          					<div className={styles.value3}>Value</div>
          					<img className={styles.dragIcon} alt="" src="Drag.svg" />
        				</div>
        				<div className={styles.hint}>Hint</div>
      			</div>
      			<div className={styles.inputField}>
        				<div className={styles.fullName}>Email</div>
        				<div className={styles.input}>
          					<div className={styles.value}>Value</div>
        				</div>
        				<div className={styles.error}>Error</div>
      			</div>
      			<div className={styles.inputField2}>
        				<div className={styles.cardNumber}>
          					<div className={styles.cardNumber1}>Card Number*</div>
          					<div className={styles.input2}>
            						<div className={styles.value}>Value</div>
          					</div>
        				</div>
        				<div className={styles.securityCode}>
          					<div className={styles.cardNumber1}>Security Code*</div>
          					<div className={styles.input3}>
            						<div className={styles.value}>Value</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.inputField2}>
        				<div className={styles.cardNumber}>
          					<div className={styles.cardNumber1}>Card Number*</div>
          					<div className={styles.input4}>
            						<div className={styles.value}>Value</div>
          					</div>
        				</div>
        				<div className={styles.securityCode2}>
          					<div className={styles.cardNumber1}>Security Code*</div>
          					<div className={styles.input5}>
            						<div className={styles.value}>Value</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.inputField}>
        				<div className={styles.fullName}>Name On Card*</div>
        				<div className={styles.input}>
          					<div className={styles.value}>Value</div>
        				</div>
      			</div>
      			<div className={styles.checkboxField}>
        				<div className={styles.checkboxAndLabel}>
          					<div className={styles.checkbox}>
            						<img className={styles.checkIcon} alt="" src="Check.svg" />
          					</div>
          					<div className={styles.iAcceptThe}>I accept the terms</div>
        				</div>
        				<div className={styles.descriptionRow}>
          					<div className={styles.checkIcon} />
          					<div className={styles.readOurTcs}>{`Read our T&Cs`}</div>
        				</div>
      			</div>
      			<div className={styles.buttonGroup}>
        				<div className={styles.button} />
        				<div className={styles.button1}>
          					<div className={styles.button2}>Support Us</div>
        				</div>
      			</div>
    		</div>);
};

export default Donation;