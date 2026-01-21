import React, { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import styles from './app.module.scss';
const Modal = React.lazy(
	() => import('../components/modal' /*webpackChunkName: "modal" */)
);

const AnotherComponent = React.lazy(
	() =>
		import(
			'../components/another-component' /*webpackChunkName: "another-component" */
		)
);

export const App = () => {
	return (
		<div className={styles.page}>
			<div className={styles.links}>
				<Link to='/another' className={styles.link}>
					РџРµСЂРµР№С‚Рё РЅР° СЃС‚Р°РЅРёС†Сѓ c РєРѕРјРїРѕРЅРµРЅС‚РѕРј
					AnotherComponent
				</Link>
				<Link to='/modal' className={styles.link}>
					РџРµСЂРµР№С‚Рё РЅР° СЃС‚Р°РЅРёС†Сѓ c РєРѕРјРїРѕРЅРµРЅС‚РѕРј Modal
				</Link>
			</div>
			<Routes>
				<Route
					path='/modal'
					element={
						<Suspense fallback={<div>Loading...</div>}>
							<Modal />
						</Suspense>
					}
				/>
				<Route
					path='/another'
					element={
						<Suspense fallback={<div>Loading...</div>}>
							<AnotherComponent />
						</Suspense>
					}
				/>
			</Routes>
		</div>
	);
};
