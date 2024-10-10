import { FunctionComponent } from 'react';
import styles from './header.module.css';
import Image from 'next/image';
import Logo from './assets/SFC Logo.jpg';

const Header: FunctionComponent = () => {
  return (
    <div className={styles.header}>
      <Image className={styles.sfcLogoIcon} src={Logo} alt='' />
      <div className={styles.navigationPillList}>
        <button className={styles.navigationPill}>Donate</button>
        <button className={styles.navigationPill}>Prices</button>
        <button className={styles.navigationPill}>Gallery</button>
        <button className={styles.navigationPill}>Florilegium</button>
        <button className={styles.navigationPill}>Wildlife</button>
        <button className={styles.navigationPill}>Contact</button>
      </div>
      <div className={styles.headerAuth}>
        <button className={styles.button}>Sign in</button>
        <button className={styles.button2}>Register</button>
      </div>
    </div>
  );
};

export default Header;