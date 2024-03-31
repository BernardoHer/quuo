import './SimulationForm.css'
import { useState } from "react";

interface ExpandedCard {
  index: number;
  monto: number;
  plazo: number;
};

interface SimulationFormProps {
  onWantedClick: Function;
};

const SimulationForm: React.FC<SimulationFormProps> = ({ onWantedClick }) => {

  const [expandedCard, setExpandedCard] = useState<ExpandedCard | null>(null);
  const [months, setMonths] = useState<number>(48);
  const [amount, setAmount] = useState<number>(100000000);

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(event.target.value));
  };

  const handleMonthsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMonths(parseInt(event.target.value));
  };

  const handleWantClick = () => {
    onWantedClick()
  };

  return (
    <div className='simulation-section' >
      <div className="input-container">
        <div className="input-wrapper">
          <label className='label-input' htmlFor="monto">Monto</label>
          <input type="text" id="monto" disabled className="styled-input" value={`$${amount}`} onChange={handleAmountChange} />
        </div>
        <div className="range-wrapper-monto">
          <input type="range" id="montoRange" min="100" max="100000000" className="styled-range" value={amount} onChange={handleAmountChange} />
        </div>
      </div>
      <div className='input-container'>
        <div className="input-wrapper">
          <label className='label-input' htmlFor=""> Plazo (meses)</label>
          <input className="styled-input" type="number" value={months} onChange={handleMonthsChange} />
          <div className='selector' >
            <div className='select-button' ></div>
          </div>
        </div>
        <div className="range-wrapper-plazo">
          <input className="styled-range" type="range" min="1" max="276" value={months} onChange={handleMonthsChange} />
        </div>
      </div>
      <p className='total'>$ {amount * months}<span className='smaller-zeros'>,00</span></p>
      <p className='cuota-mensual'>Cuota mensual aproximada</p>
      <p className='simulacion-title'>Esta simulación es un aproximado calculado con una tasa del</p>
      <p className='simulacion-title' ><strong>00.00% E.A</strong></p>
      <button className='want-button' onClick={handleWantClick}>¡Lo quiero!</button>
      <button className='simulate-button' onClick={() => setExpandedCard(null)}>Simular otro producto</button>
    </div>
  );
};

export default SimulationForm