import { useEffect, useState } from 'react';
import styles from './modal.module.scss';
export default function Modal() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				e.preventDefault();
				setIsOpen(false);
				console.log('РќР°Р¶Р°Р»Рё РєРЅРѕРїРєСѓ ESC');
			}
		};
		document.addEventListener('keydown', handleEsc);
	}, []);

	return (
		<div className={styles.wrapper}>
			<button onClick={() => setIsOpen(true)}>
				РћС‚РєСЂС‹С‚СЊ РјРѕРґР°Р»СЊРЅРѕРµ РѕРєРЅРѕ
			</button>
			<div className={styles.modal}>
				{isOpen && (
					<div className={styles.container}>
						<button onClick={() => setIsOpen(false)}>
							Р—Р°РєСЂС‹С‚СЊ РјРѕРґР°Р»СЊРЅРѕРµ РѕРєРЅРѕ
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
