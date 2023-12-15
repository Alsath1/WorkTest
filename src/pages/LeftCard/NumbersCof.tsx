import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { ProcentSlice } from 'src/store/reducers/ProcentSlice';

import styled from 'styled-components';

export const NumberTitle = (Props: any) => {
	// Получение текущего значения шкалы
	const { count } = useAppSelector(state => state.userReducer);

	// Получение Slice и dispatch
	const { CurrentCount } = ProcentSlice.actions;
	const dispatch = useAppDispatch();

	// Число коофицента
	const StyledTitle = styled.div`
		border-radius: 6px;
		background: ${count == Props.id ? '#02C5FF' : '#23204B'};
		padding: 1px 10px 1px 12px;
		cursor: pointer;
		transition: all 0.3s;
		&:hover {
			background: ${count == Props.id ? '#02C5FF' : '#3d378b'};
			transform: ${count == Props.id ? 'scale(1.2)' : 'none'};
			transition: all 0.3s;
		}
		@media (max-width: 640px) and (min-width: 375px) {
		}
		@media (max-width: 1024px) and (min-width: 640px) {
		}
		@media (max-width: 1440px) and (min-width: 1024px) {
		}
		@media (max-width: 1920px) and (min-width: 1440px) {
		}
	`;

	return (
		<StyledTitle
			{...Props}
			onClick={() => {
				dispatch(CurrentCount(Props.id / 1));
			}}
		/>
	);
};
