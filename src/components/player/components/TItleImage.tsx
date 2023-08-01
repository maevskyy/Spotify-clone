import styles from '../style.module.scss';
import { BiHeart } from 'react-icons/bi';
import { BsWindowFullscreen } from 'react-icons/bs';

type Props = {
	image: string;
	title: string;
	author: string;
};

const TItleImage = ({ image, title, author }: Props) => {
	return (
		<div className={styles.player__titleImage}>
			<img
				src={image}
				alt=''
				className={styles.titleImage__img}
			/>
			<div className={styles.titleImage__text}>
				<span className={styles.titleImage__title}>{title}</span>
				<span className={styles.titleImage__author}>{author}</span>
			</div>
			<div className={styles.titleImage__controlers}>
				<BiHeart className={styles.titleImage__heart} />
                <BsWindowFullscreen className={styles.titleImage__screen}/>
			</div>
		</div>
	);
};

export default TItleImage;
