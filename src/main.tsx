import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { setupStore } from './store/store.tsx';
import { createGlobalStyle } from 'styled-components';
// инициализация store
const store = setupStore();

// дефолтные стилти
const Global = createGlobalStyle`
*{
	font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
	line-height: 1.5;
	font-weight: 500;

	color-scheme: light dark;
	color: #fff;


	font-synthesis: none;
	text-rendering: optimizeLegibility;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	-webkit-text-size-adjust: 100%;
	margin: 0;
	padding: 0;
}
`;

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<Global />
			<App />
		</Provider>
	</React.StrictMode>
);
