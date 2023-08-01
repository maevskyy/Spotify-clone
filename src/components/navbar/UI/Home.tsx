import { GoHome, GoHomeFill } from 'react-icons/go';
import { NavLink, useLocation } from 'react-router-dom';
import styles from '../style.module.scss'

type Props = {};

const Home = (props: Props) => {
	const { pathname } = useLocation();
	console.log(pathname);
  
	return (
		<NavLink
			to=''
			className={styles.block__items}
			style={({ isActive }) => {
				return {
				  color: isActive ? "white" : "#B3B3B3",
				};
			  }}
		>
			{pathname == '/' ? (
				<GoHomeFill className={styles.block__icon}/>
			) : (
				<GoHome className={styles.block__icon} />
			)}
			<p>Home</p>
		</NavLink>
	);
};

export default Home;
