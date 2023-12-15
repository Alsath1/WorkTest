import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import { ProcentSlice } from 'src/store/reducers/ProcentSlice';
import styled from 'styled-components';
import LeftBackgroungImg from './LeftBackgroungImg.svg';
import { NumberTitle } from './NumbersCof';

// полностью весь левый/ верхний контейнер
const LeftCont = styled.div`
	width: 337px;
	height: 334px;
	display: flex;
	flex-direction: column;
	margin-bottom: 40px;
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

// Верхний подконтейнер
const TopCont = styled.div`
	width: 337px;
	height: 251px;
	margin-bottom: 20px;
	border-radius: 30px;
	background-color: #23204b;
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

// текст внутри
const ItemUp = styled.div`
	display: inline-flex;
	justify-content: flex-start;
	align-items: flex-end;
	width: 503px;
	height: 251px;
	margin-left: 30px;
	margin-bottom: 30px;
`;

// Нижний подконтейнер с input
const UnderCont = styled.div`
	width: 336px;
	height: 63px;
	border-radius: 20px;
	background: #23204b;
	box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: center;
	align-items: center;
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

// Контеней коофицентов
const NumS = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 298px;
	height: 17px;
	font-size: 14px;
	margin-bottom: 10px;
	@media (max-width: 640px) and (min-width: 376px) {
		width: 364px;
	}
	@media (max-width: 1024px) and (min-width: 641px) {
		width: 289px;
	}
	@media (max-width: 1440px) and (min-width: 1024px) {
		width: 364px;
	}
	@media (max-width: 2160px) and (min-width: 1440px) {
		width: 464px;
	}
`;

// Input
const InputCurrent = styled.div`
	width: 290px;
	height: 17px;
	appearance: none;
	background: transparent;
	cursor: pointer;
	input {
		width: 290px;
		appearance: none;
		background: transparent;
		cursor: pointer;
		@media (max-width: 640px) and (min-width: 376px) {
			width: 364px;
		}
		@media (max-width: 1024px) and (min-width: 641px) {
			width: 269px;
		}
		@media (max-width: 1440px) and (min-width: 1024px) {
			width: 364px;
		}
		@media (max-width: 2160px) and (min-width: 1440px) {
			width: 464px;
		}

		&::-webkit-slider-runnable-track {
			background: #817da4;
			border-radius: 20px;
			height: 4px;
		}
		&::-moz-range-track {
			background: #817da4;
			border-radius: 20px;
			height: 4px;
		}
		&::-webkit-slider-thumb {
			width: 33px;
			height: 16px;
			border-radius: 10px;
			background: #02c5ff;
		}
		&::-moz-range-thumb {
			width: 33px;
			height: 16px;
			border-radius: 10px;
			background: #02c5ff;
		}
	}
	@media (max-width: 640px) and (min-width: 376px) {
		width: 364px;
	}
	@media (max-width: 1024px) and (min-width: 641px) {
		width: 269px;
	}
	@media (max-width: 1440px) and (min-width: 1024px) {
		width: 364px;
	}
	@media (max-width: 2160px) and (min-width: 1440px) {
		width: 464px;
	}
`;

export const LeftCard = () => {
	// Получение текущего значения шкалы
	const { count } = useAppSelector(state => state.userReducer);

	// Получение Slice и dispatch
	const { CurrentCount } = ProcentSlice.actions;
	const dispatch = useAppDispatch();

	return (
		<LeftCont>
			<TopCont>
				<ItemUp>Улучшить предмет</ItemUp>
			</TopCont>
			<UnderCont>
				<NumS>
					<NumberTitle id='1'>1.2X</NumberTitle>
					<NumberTitle id='2'>1.5X</NumberTitle>
					<NumberTitle id='3'>2.0X</NumberTitle>
					<NumberTitle id='4'>3.0X</NumberTitle>
					<NumberTitle id='5'>5.0X</NumberTitle>
					<NumberTitle id='6'>10X</NumberTitle>
				</NumS>
				<InputCurrent>
					<input
						type='range'
						min='1'
						max='6'
						step='1'
						list='markers'
						value={count}
						onChange={event => {
							dispatch(CurrentCount(event.currentTarget.value));
						}}
					/>
					<datalist id='markers'>
						<option value='1'></option>
						<option value='2'></option>
						<option value='3'></option>
						<option value='4'></option>
						<option value='5'></option>
						<option value='6'></option>
					</datalist>
				</InputCurrent>
			</UnderCont>
		</LeftCont>
	);
};

{
	/* <div
						onClick={() => {
							dispatch(CurrentCount('1'));
						}}
						style={
							count == 1
								? {
										background: '#02C5FF',
										borderRadius: '6px',
										padding: '0 10px 0 12px',
										cursor: 'pointer'
								  }
								: {
										background: '#23204B',
										padding: '0 10px 0 12px',
										transition: '.2s',
										cursor: 'pointer'
								  }
						}
					>
						1.2X
					</div>
					<div
						onClick={() => {
							dispatch(CurrentCount('2'));
						}}
						style={
							count == 2
								? {
										background: '#02C5FF',
										borderRadius: '6px',
										padding: '0 10px0 12px',
										cursor: 'pointer'
								  }
								: {
										background: '#23204B',
										padding: '0 10px 0 12px',
										transition: '.2s',
										cursor: 'pointer'
								  }
						}
					>
						1.5X
					</div>
					<div
						onClick={() => {
							dispatch(CurrentCount('3'));
						}}
						style={
							count == 3
								? {
										background: '#02C5FF',
										borderRadius: '6px',
										padding: '0 10px 0 12px',
										cursor: 'pointer'
								  }
								: {
										background: '#23204B',
										padding: '0 10px 0 12px',
										transition: '.2s',
										cursor: 'pointer'
								  }
						}
					>
						2.0X
					</div>
					<div
						onClick={() => {
							dispatch(CurrentCount('4'));
						}}
						style={
							count == 4
								? {
										background: '#02C5FF',
										borderRadius: '6px',
										padding: '0 10px 0 12px',
										cursor: 'pointer'
								  }
								: {
										background: '#23204B',
										padding: '0 10px 0 12px',
										transition: '.2s',
										cursor: 'pointer'
								  }
						}
					>
						3.0X
					</div>
					<div
						onClick={() => {
							dispatch(CurrentCount('5'));
						}}
						style={
							count == 5
								? {
										background: '#02C5FF',
										borderRadius: '6px',
										padding: '0 10px 0 12px',
										cursor: 'pointer'
								  }
								: {
										background: '#23204B',
										padding: '0 10px 0 12px',
										transition: '.2s',
										cursor: 'pointer'
								  }
						}
					>
						5.0X
					</div>
					<div
						onClick={() => {
							dispatch(CurrentCount('6'));
						}}
						style={
							count == 6
								? {
										background: '#02C5FF',
										borderRadius: '6px',
										padding: '0 10px 0 12px',
										cursor: 'pointer'
								  }
								: {
										background: '#23204B',
										padding: '0 10px 0 12px',
										transition: '.2s',
										cursor: 'pointer'
								  }
						}
					>
						10X
					</div> */
}
