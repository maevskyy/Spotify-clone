import { RiSearchLine, RiSearchFill } from 'react-icons/ri';
import { NavLink, useLocation } from 'react-router-dom';
import styles from '../styles.module.scss';

const Search = () => {
	const { pathname } = useLocation();

	return (
		<NavLink
			to='/search'
			className={styles.block__items}
			style={({ isActive }) => {
				return {
					color: isActive ? 'white' : '#B3B3B3',
				};
			}}
		>
			{pathname == '/search' ? (
				<RiSearchFill className={styles.block__icon} />
			) : (
				<RiSearchLine className={styles.block__icon} />
			)}
			<p>Search</p>
		</NavLink>
	);
};

export default Search;
