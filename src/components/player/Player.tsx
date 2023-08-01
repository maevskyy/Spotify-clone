import styles from './style.module.scss';
import { useCurrentMusic } from '../../store/currentMusic';
import { useRef, useState, useEffect } from 'react';
import TItleImage from './components/TItleImage';
import MainPlayer from './components/MainPlayer';
import VolumeAndStuff from './components/VolumeAndStuff';

type Props = {};

const Player = (props: Props) => {
	const musicData = useCurrentMusic((store) => store.musicData);
	const musicRef = useRef<HTMLAudioElement>(null);

	return (
		<div className={styles.player}>
			<TItleImage title={musicData.title} author={musicData.author} image={musicData.image}  />
			<MainPlayer/>
			<VolumeAndStuff/>
		</div>
	);
};

export default Player;
