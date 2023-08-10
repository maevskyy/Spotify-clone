import { useState } from 'react';

import style from '../../style.module.scss';
import Search from '../../../../shared/UI/search/Search';
import Arrows from '../../../../shared/UI/arrows/Arrows';

const Header = () => {
	const [first, setfirst] = useState('');

	return (
		<header className={style.page__header}>
			<article className={style.page__header__left}>
				<Arrows />
				<Search
					value={first}
					setValue={setfirst}
				/>
			</article>
		</header>
	);
};

export default Header;
