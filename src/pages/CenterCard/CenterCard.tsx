import { useAppSelector } from 'src/hooks/redux';
import { GlobalSvgSelector } from 'src/img/GlobalSvgSelector';
import CenterBackgroungImg from '/CenterBackgroungImg.svg';
import styled from 'styled-components';

// центральный блок
const CenterCont = styled.div`
	width: 336px;
	height: 334px;
	background: #23204b;
	background-image: url(${CenterBackgroungImg});
	border-radius: 30px;
	box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding-top: 33px;
	margin-bottom: 40px;
	@media (max-width: 640px) and (min-width: 376px) {
		width: 556px;
	}
	@media (max-width: 1024px) and (min-width: 641px) {
		width: 346px;
		margin-right: 10px;
		margin-left: 10px;
	}
	@media (max-width: 1440px) and (min-width: 1024px) {
		width: 556px;
		margin-right: 20px;
		margin-left: 20px;
	}
	@media (max-width: 2160px) and (min-width: 1440px) {
		width: 556px;
		margin-right: 20px;
		margin-left: 20px;
	}
`;

// число в центре
const Procent = styled.div`
	font-size: 32px;
	position: relative;
	top: -150px;
`;

export const CenterCard = () => {
	// Получение текущего значения шкалы
	const { count } = useAppSelector(state => state.userReducer);

	return (
		<CenterCont>
			<GlobalSvgSelector id={count} />
			<Procent>{100 - count * 16}%</Procent>
		</CenterCont>
	);
};
