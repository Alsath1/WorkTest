import { GlobalSvgSelector } from 'src/img/GlobalSvgSelector';
import LeftBackgroungImg from './LeftBackgroungImg.svg';
import styled from 'styled-components';

const RightCont = styled.div`
	width: 337px;
	display: flex;
	flex-direction: column;
	@media (max-width: 640px) and (min-width: 376px) {
		width: 406px;
	}
	@media (max-width: 1024px) and (min-width: 641px) {
		width: 309px;
	}
	@media (max-width: 1440px) and (min-width: 1024px) {
		width: 406px;
	}
	@media (max-width: 2160px) and (min-width: 1440px) {
		width: 503px;
	}
`;
// весь контейнер
const TopCont = styled.div`
	width: 337px;
	height: 251px;
	margin-bottom: 20px;
	border-radius: 30px;
	background: #23204b;
	box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url(${LeftBackgroungImg});
	background-position: center;
	@media (max-width: 640px) and (min-width: 376px) {
		width: 406px;
	}
	@media (max-width: 1024px) and (min-width: 641px) {
		width: 309px;
	}
	@media (max-width: 1440px) and (min-width: 1024px) {
		width: 406px;
	}
	@media (max-width: 2160px) and (min-width: 1440px) {
		width: 503px;
	}
`;
// надпись снизу
const ItemUp = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: flex-end;
	width: 503px;
	height: 251px;
	margin-left: 30px;
	margin-bottom: 30px;
`;
// верхняя часть контейнера
const UpderCont = styled.div`
	width: 337px;
	height: 63px;
	border-radius: 20px;
	background: #23204b;
	box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 640px) and (min-width: 376px) {
		width: 406px;
	}
	@media (max-width: 1024px) and (min-width: 641px) {
		width: 309px;
	}
	@media (max-width: 1440px) and (min-width: 1024px) {
		width: 406px;
	}
	@media (max-width: 2160px) and (min-width: 1440px) {
		width: 503px;
	}
`;
// нижняя часть контейнера
const Upgrade = styled.div`
	margin-left: 11px;
`;

export const RightCard = () => {
	return (
		<RightCont>
			<TopCont>
				<ItemUp>Получить предмет</ItemUp>
			</TopCont>
			<UpderCont>
				<GlobalSvgSelector id='>' />
				<Upgrade>Апгрейдить</Upgrade>
			</UpderCont>
		</RightCont>
	);
};
