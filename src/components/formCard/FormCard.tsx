import { useState, useEffect } from 'react';
import './FormCard.css';
import idIcon from './icons/id-icon.png'
import userIcon from './icons/user-icon.png'
import mobilIcon from './icons/mobile-icon.png'

const FormCard = () => {
  const [cedula, setCedula] = useState<string>('');
  const [primerApellido, setPrimerApellido] = useState<string>('');
  const [celular, setCelular] = useState<string>('');
  const [acceptTerms, setAcceptTerms] = useState<boolean>(false);
  const [formValid, setFormValid] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    validateForm(cedula, primerApellido, celular, acceptTerms);
  }, [cedula, primerApellido, celular, acceptTerms]);

  const handleCedulaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = event.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setCedula(value);
    }
  };

  const handlePrimerApellidoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = event.target.value;
    if (/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s']*$/u.test(value) || value === '') {
      setPrimerApellido(value);
    }
  };

  const handleCelularChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = event.target.value;
    if (/^3\d{0,9}$/.test(value)) {
      setCelular(value);
    }
  };

  const handleAcceptTermsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked: boolean = event.target.checked;
    setAcceptTerms(checked);
  };

  const validateForm = (cedula: string, primerApellido: string, celular: string, acceptTerms: boolean) => {
    if (
      cedula.length === 10 &&
      primerApellido.trim() !== '' &&
      celular.length === 10 &&
      celular.startsWith('3') &&
      acceptTerms
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formValid) {
      console.log('Formulario enviado:', { cedula, primerApellido, celular });
      setFormSubmitted(true);
    } else {
      console.log('El formulario no es válido');
    }
  };

  return (
    <div className='form'>
      {formSubmitted ? (
        <h3 className='thanks-title'> Gracias por enviar tu informacion!</h3>
      ) : (
        <form onSubmit={handleSubmit} className="minimal-form">
          <h2 className='form-title'>Para comenzar unos <span>datos iniciales</span></h2>
          <div className='inputs-container' >
            <div className="form-group">
              <img className='input-icon' src={idIcon} alt="cedula icon" />
              <input
                className='input-form'
                type="text"
                value={cedula}
                onChange={handleCedulaChange}
                placeholder="Cédula"
                required
              />
            </div>
            <div className="form-group">
              <img className='input-icon' src={userIcon} alt="user icon" />
              <input
                className='input-form'
                type="text"
                value={primerApellido}
                onChange={handlePrimerApellidoChange}
                placeholder="Primer apellido"
                required
              />
            </div>
            <div className="form-group">
              <img className='input-icon' src={mobilIcon} alt="phone icon" />
              <input
                className='input-form'
                type="tel"
                value={celular}
                onChange={handleCelularChange}
                placeholder="Celular"
                required
              />
            </div>
          </div>
          <div className="conditions-container">
            <label className='text-conditions' htmlFor="accept">
              <input
                type="checkbox"
                id="accept"
                name="accept"
                onChange={handleAcceptTermsChange}
                required
              />
              <div className="text">
              Acepto los<span>Términos y Condiciones</span>y la<span>Política de tratamiento de datos </span>
              </div>
            </label>
          </div>
          <button type="submit" className={`form-button ${formValid ? 'enabled' : 'disabled'}`} disabled={!formValid}>¡Comencemos!</button>
        </form>
      )
      }
    </div>
  );
};

export default FormCard;
