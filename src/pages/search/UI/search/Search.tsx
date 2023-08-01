import { RiSearchLine } from 'react-icons/ri';
import { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import styles from './style.module.scss';

type Props = {
	setValue: (val: string) => void;
	value: string;
};

const Search = ({ setValue, value }: Props) => {
	const [isFocused, setIsFocused] = useState(false);
	return (
		<div
			className={styles.input__block}
			style={{ border: isFocused ? '2px solid white' : '' }}
		>
			<RiSearchLine className={styles.input__icon} />
			<input
				type='text'
				value={value}
				className={styles.input__input}
				placeholder='What do you want to listen to?'
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				onChange={(e) => setValue(e.target.value)}
			></input>
			{value.length >= 1 && <RxCross1 onClick={() => setValue('')} />}
		</div>
	);
};

export default Search;
