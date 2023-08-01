import { useSongsStore } from '../../store/songs';
import Card from './components/card/Card';
import styles from './style.module.scss';

type Props = {};

const Main = (props: Props) => {

  const songsData = useSongsStore(store => store.songs) 

  

	return (
		<main className={styles.main}>
			<h4 className={styles.main__title}>Browse all</h4>
			<div className={styles.main__cards}>
        {songsData.length > 1 && songsData.map(song => (
          <Card song={song}/>
        ))}
			</div>
		</main>
	);
};

export default Main;
