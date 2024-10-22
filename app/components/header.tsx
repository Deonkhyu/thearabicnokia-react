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
			<Link href="/donate">
				<button className={styles.navigationPill}>Donate</button>
			</Link>
			<Link href="/prices">
				<button className={styles.navigationPill}>Prices</button>
			</Link>
			<Link href="/gallery">
				<button className={styles.navigationPill}>Gallery</button>
			</Link>
			<Link href="/about">
				<button className={styles.navigationPill}>About</button>
			</Link>
			<Link href="/contact">
				<button className={styles.navigationPill}>Contact</button>
			</Link>
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