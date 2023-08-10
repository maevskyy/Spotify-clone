import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import style from './style.module.scss';

type Props = {};

const Arrows = (props: Props) => {
	return (
		<div className={style.paggination}>
			<div className={style.paggination__arrows}>
				<MdKeyboardArrowLeft />
			</div>
			<div className={style.paggination__arrows}>
				<MdKeyboardArrowRight />
			</div>
		</div>
	);
};

export default Arrows;
