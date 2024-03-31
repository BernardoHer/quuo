import { useEffect, useState } from 'react';
import './Card.css';
import SimulationForm from '../simulation/SimulationForm';
import FormCard from '../formCard/FormCard';

export interface CardData {
  icon: string;
  title: string;
  description: string;
  showForms: boolean;
  id: number;
};

interface CardTestProps {
  card: CardData;
  onSelectCard: Function;
  isExpanded?: boolean;
};

const CardWrapper: React.FC<CardTestProps> = ({ card, onSelectCard, isExpanded }) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [showForm, setShowForm] = useState<boolean>(false);

  const openFormCard = () => {
    setExpanded(false)
    setShowForm(true)
  };

  const onHandleClick = () => {
    setExpanded(true)
    onSelectCard(card)
  };

  useEffect(() => {
    if (isExpanded) {
      setExpanded(isExpanded)
    }
  }, [isExpanded]);

  return (
    <div className='card-container'>
      <div className='card-content' onClick={() => { onHandleClick() }} >
        <div className='title-card-section'>
          <img src={card.icon} alt="Icon" className='icon' />
          <h2 className='title'>{card.title}</h2>
        </div>
        <p className='card-description'>{card.description}</p>
      </div>
      {expanded && <SimulationForm onWantedClick={openFormCard} />}
      {showForm && <FormCard />}
    </div>
  )
};

export default CardWrapper