/** @format */

import style from './App.module.sass';
import { CenterCard } from './pages/CenterCard/CenterCard';
import { LeftCard } from './pages/LeftCard/LeftCard';
import { RightCard } from './pages/RightCard/RightCard';

function App() {
	return (
		<div className={style.MainCont}>
			<div className={style.cont}>
				<LeftCard></LeftCard>
				<CenterCard></CenterCard>
				<RightCard></RightCard>
			</div>
		</div>
	);
}

export default App;
