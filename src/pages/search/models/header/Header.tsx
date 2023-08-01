import { useState, useEffect } from 'react';
import { searchRapid } from '../../api/searchRapid';
import Paggination from '../../UI/paggination/Paggination';
import Search from '../../UI/search/Search';
import './style.scss';
import useDebounce from '../../../../hooks/useDebounce';
import { useSongsStore } from '../../store/songs';

type Props = {};

const Header = (props: Props) => {

	const [searchVal, setSearchVal] = useState<string>('');
	const debouncedSearchVal = useDebounce(searchVal);

	const addToStore = useSongsStore(store => store.addSongs)


	useEffect(() => {
		const fetchData = async () => {
			try {
				if (debouncedSearchVal !== '') {
					const response = await searchRapid(debouncedSearchVal)
					addToStore(response)
				}
			} catch (error) {
				console.error('Troubles with useEffect in Header', error);
			}
		};
		fetchData();
	}, [debouncedSearchVal]);

	return (
		<header className='header'>

			<div className='header__left'>
				<Paggination />
				<Search
					setValue={setSearchVal}
					value={searchVal}
				/>
			</div>
			<div className='header__right'>login and stuff</div>
		</header>
	);
};

export default Header;
