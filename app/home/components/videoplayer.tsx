import { FunctionComponent } from 'react';
import styles from '../styles/video.module.css';

const VideoPlayer: FunctionComponent = () => {
	return (
	<div className={styles.videoContainer}>
		<video muted autoPlay loop className={styles.video}>
		<source src="/videos/Semenggoh Nature Reserve.mp4" type="video/mp4" />
		</video>
		<div className={styles.title}>Semenggoh Nature Reserve</div>
	</div>
	);
};

export default VideoPlayer;