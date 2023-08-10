import Home from '../../UI/Home';
import Search from '../../UI/Search';
import styles from '../../styles.module.scss';

const HomeAndSearch = () => {
	return (
		<div className={styles.navbar__block}>
			<Home />
			<Search />
		</div>
	);
};

export default HomeAndSearch;
