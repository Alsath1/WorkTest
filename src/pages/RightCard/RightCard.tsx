import { GlobalSvgSelector } from 'src/img/GlobalSvgSelector';
import style from './RightCard.module.sass';

export const RightCard = () => {
	return (
		<div className={style.cont}>
			<div className={style.topcont}>
				<div className={style.itemUp}>Получить предмет</div>
			</div>
			<div className={style.undercont}>
				<GlobalSvgSelector id='>' />
				<div className={style.Upgrade}>Апгрейдить</div>
			</div>
		</div>
	);
};
