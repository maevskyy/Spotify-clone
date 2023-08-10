import { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { RxCross1 } from 'react-icons/rx';

import style from './style.module.scss';

type Props = {
	setValue: (val: string) => void;
	value: string;
};

const Search = ({ setValue, value }: Props) => {
	const [isFocused, setIsFocused] = useState(false);
	return (
		<div
			className={style.input__block}
			style={{ border: isFocused ? '2px solid white' : '' }}
		>
			<div className={style.input__left}>
				<RiSearchLine className={style.input__icon} />
				<input
					type='text'
					value={value}
					className={style.input__input}
					placeholder='What do you want to listen to?'
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					onChange={(e) => setValue(e.target.value)}
				></input>
			</div>
			<RxCross1
				onClick={() => setValue('')}
				className={
					value.length >= 1
						? style.input__crossbar_active
						: style.input__crossbar_disabled
				}
			/>
		</div>
	);
};

export default Search;
