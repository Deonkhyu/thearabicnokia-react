import { FunctionComponent } from 'react';
import styles from './styles/header.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Header: FunctionComponent = () => {
	return (
	<div className={styles.header}>	
		<Link href="/home">
			<Image className={styles.sfcLogoIcon} src="/images/SFC Logo.jpg" alt='' width={60} height={85} />
		</Link>
		<div className={styles.navigationPillList}>
			<button className={styles.navigationPill}>Donate</button>
			<button className={styles.navigationPill}>Prices</button>
			<button className={styles.navigationPill}>Gallery</button>
			<button className={styles.navigationPill}>About</button>
			<button className={styles.navigationPill}>Contact</button>
		</div>
		<div className={styles.headerAuth}>
			<Link href="/login">
				<button className={styles.button}>Sign in</button>
			</Link>
			<button className={styles.button2}>Register</button>
		</div>
	</div>
	);
};

export default Header;