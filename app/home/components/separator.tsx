import { FunctionComponent } from 'react';
import styles from '../styles/separator.module.css';


const Separator:FunctionComponent = () => {
  	return (
    		<div className={styles.separator}>
      			<div className={styles.separatorText}>
        				<b className={styles.semonggohNatureReserve}>Semonggoh Nature Reserve</b>
        				<div className={styles.looksAfterSarawaks}>Looks after Sarawak’s national treasures.</div>
      			</div>
    		</div>);
};

export default Separator;