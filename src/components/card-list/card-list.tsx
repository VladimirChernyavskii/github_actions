import Card from '../card/card';
import styles from './card-list.module.scss';
export type Card = {
	id: number;
	name: string;
};

type CardListProps = {
	dataCard: Card[];
};

export default function CardList({ dataCard }: CardListProps) {
	dataCard.push({ id: 3, name: 'Р”РѕР±Р°РІРёС‚СЊ РєР°СЂС‚РѕС‡РєСѓ' });
	return (
		<section className={styles.container}>
			{dataCard.map((item) => (
				<Card key={item.id} name={item.name} />
			))}
		</section>
	);
}
