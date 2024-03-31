import { useState } from 'react';
import './Card.css';
import CardTest, { CardData } from './CardWrapper';

interface CardProps {
  cards: CardData[];
};

const Card: React.FC<CardProps> = ({ cards }) => {
  const [selectedCard, setSelectedCard] = useState<CardData>()
  return (
    <main className='cards-container'>
      {selectedCard ? <CardTest isExpanded={true} card={selectedCard} onSelectCard={setSelectedCard} /> : (
        cards.map((card, index) => (
          <CardTest card={card} key={index} onSelectCard={setSelectedCard} />
        ))
      )}
    </main>
  );
};
export default Card;