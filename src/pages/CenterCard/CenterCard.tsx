import style from './CenterCard.module.sass';

import { useAppSelector } from 'src/hooks/redux';
import { GlobalSvgSelector } from 'src/img/GlobalSvgSelector';

export const CenterCard = () => {
	const { count } = useAppSelector(state => state.userReducer);
	return (
		<div className={style.cont}>
			<GlobalSvgSelector id={count} />

			<div className={style.procent} style={{ transition: '.9s' }}>
				{100 - count * 16}%
			</div>
		</div>
	);
};
