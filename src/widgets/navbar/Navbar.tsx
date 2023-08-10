import HomeAndSearch from './components/homeAndSearch/HomeAndSearch';
import Library from './components/library/Library';
import styles from './styles.module.scss';

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<HomeAndSearch />
			<Library />
		</nav>
	);
};

export default Navbar;
