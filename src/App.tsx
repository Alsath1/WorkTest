/** @format */

import { CenterCard } from './pages/CenterCard/CenterCard';
import { LeftCard } from './pages/LeftCard/LeftCard';
import { RightCard } from './pages/RightCard/RightCard';
import styled from 'styled-components';

function App() {
	const MainCont = styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	`;

	const Cont = styled.div`
		display: flex;
		justify-content: flex-start;
		flex-direction: column;
		align-items: center;
		background: #1c1a3f;
		width: 375px;
		height: 100%;
		padding-top: 10px;
		padding-bottom: 40px;
		@media (max-width: 640px) and (min-width: 376px) {
			width: 100%;
			padding-top: 53px;
			padding-bottom: 53px;
			padding-right: 42px;
			padding-left: 42px;
		}
		@media (max-width: 1024px) and (min-width: 641px) {
			flex-direction: row;
			justify-content: center;
			align-items: start;
			width: 100%;
			padding-top: 53px;
			padding-bottom: 53px;
			padding-right: 20px;
			padding-left: 20px;
		}
		@media (max-width: 1440px) and (min-width: 1024px) {
			flex-direction: row;
			justify-content: center;
			align-items: start;
			width: 100%;
			padding-top: 53px;
			padding-bottom: 149px;
			padding-right: 20px;
			padding-left: 20px;
		}
		@media (max-width: 2160px) and (min-width: 1440px) {
			flex-direction: row;
			justify-content: center;
			align-items: start;
			width: 100%;
			padding-top: 53px;
			padding-bottom: 149px;
			padding-right: 160px;
			padding-left: 160px;
		}
	`;

	return (
		<MainCont>
			<Cont>
				<LeftCard></LeftCard>
				<CenterCard></CenterCard>
				<RightCard></RightCard>
			</Cont>
		</MainCont>
	);
}

export default App;
