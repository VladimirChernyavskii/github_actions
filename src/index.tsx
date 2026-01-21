import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app';
import { Analytic } from './context/analityc';
import './styles.css';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);
declare const __PUBLIC_PATH__: string;
root.render(
	<StrictMode>
		<Analytic.Provider value={{ yandexId: 96728508, googleId: 'G-ZXWBHB1NR0' }}>
			<BrowserRouter basename={__PUBLIC_PATH__}>
				<App />
			</BrowserRouter>
		</Analytic.Provider>
	</StrictMode>
);
