import { useAppDispatch, useAppSelector } from 'src/hooks/redux';
import styles from './LeftCard.module.sass';
import { ProcentSlice } from 'src/store/reducers/ProcentSlice';

export const LeftCard = () => {
	const { count } = useAppSelector(state => state.userReducer);
	const { CurrentCount } = ProcentSlice.actions;
	const dispatch = useAppDispatch();

	return (
		<div className={styles.cont}>
			<div className={styles.topcont}>
				<div className={styles.itemUp}>Улучшить предмет</div>
			</div>
			<div className={styles.undercont}>
				<div className={styles.numS}>
					<div
						onClick={() => {
							dispatch(CurrentCount('1'));
						}}
						className={styles.oneNum}
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
						className={styles.twoNum}
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
						className={styles.treeNum}
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
						className={styles.foreNum}
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
						className={styles.fiveNum}
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
						className={styles.sixNum}
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
					</div>
				</div>
				<div className={styles.line}>
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
				</div>
			</div>
		</div>
	);
};
