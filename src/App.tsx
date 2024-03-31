import './App.css';
import heroImage from './img/shutterstock_2138770023@2x.png';
import logo from './img/Capa_1-2.svg';
import trazado from './img/Trazado 342@2x.png';
import Card from './components/card/Card';
import iconoCasa from './icons/iconos quuo_Credito Hipotecario N@2x.png'
import iconoVehicular from './icons/iconos quuo_Credito Vehiculo N@2x.png'
import iconoEstudiantil from './icons/iconos quuo_Credito Estudiantil N@2x.png'
import { CardData } from './components/card/CardWrapper';

const cardData: CardData[] = [
  {
    icon: iconoCasa,
    title: 'Crédito hipotecario Mi techo yá',
    description: '¡Para familias jóvenes que aspiran a su primer hogar!',
    showForms: true,
    id: 1,
  },
  {
    icon: iconoVehicular,
    title: 'Crédito para vehículos',
    description: '¡Compra esa nave con la que siempre has soñado!',
    showForms: false,
    id: 2,
  },
  {
    icon: iconoEstudiantil,
    title: 'Crédito estudiantil para jóvenes',
    description: '¡Estudia y alcanza tus metas profesionales!',
    showForms: false,
    id: 3,
  },
];


function App() {
  return (
    <main className="main-container">
      <img className='hero-image' src={heroImage} alt="Hero img" />
      <div className='logo-container' >
        <img className='logo' src={logo} alt="main logo img" />
      </div>
      <h1 className='credito-title'>Tu crédito en</h1>
      <img className='pasos-image' src={trazado} alt="3 pasos img" />
      <h2 className="credito-subtitle">¿Qué <span>crédito te interesa</span>?</h2>
      <Card cards={cardData} />
    </main>
  );
}

export default App;
