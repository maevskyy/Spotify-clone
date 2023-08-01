import Home from '../../UI/Home';
import Search from '../../UI/Search';
import styles from '../../style.module.scss'

type Props = {};

const HomeAndSearch = (props: Props) => {
	return (
		<div className={styles.block}>
			<Home />
			<Search />
		</div>
	);
};

export default HomeAndSearch;
