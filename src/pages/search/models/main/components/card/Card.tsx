import { TSearch } from '../../../../../../types/searchT';
import { BsFillPlayFill } from 'react-icons/bs';
import styles from './style.module.scss';

import { useCurrentMusic } from '../../../../../../store/currentMusic';

type Props = {
	song: TSearch;
};

const Card = ({ song }: Props) => {
	
	const { turnOnMusic } = useCurrentMusic((store) => store);

	return (
		<div className={styles.card}>
			<div className={styles.card__imageBlcok}>
				<img
					src={song.md5_image}
					className={styles.card__image}
					alt=''
				/>
				<div
					className={styles.card__playButton}
					onClick={() =>
						turnOnMusic({
							url: song.preview,
							title: song.title_short,
							author: song.artist.name,
							image: song.md5_image
						})
					}
				>
					<BsFillPlayFill />
				</div>
			</div>
			<div className={styles.card__killme}>
				<h6 className={styles.card__title}>
					{song.title_short.length > 20
						? `${song.title_short.slice(0, 20)}..`
						: song.title_short}
				</h6>
				<h6 className={styles.card__artist}>{song.artist.name}</h6>
			</div>
		</div>
	);
};

export default Card;
