import React from 'react';
import Card from './Card';

function Cards(props) {
	return props.cards.map((card, index) =>
		<React.Fragment key={card.id}>
			<Card classes={card.classes}>
				{card.conteudo}
			</Card>

			{(index < props.cards.length - 1) && <hr />}
		</React.Fragment>
	)
}

export default Cards;