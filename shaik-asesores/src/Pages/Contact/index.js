import React from "react";
import contactImg from '../../asset/atencion.png';
import './style.css';

/**
 * Componente que representa la sección de contacto.
 * Incluye información sobre cómo contactar y un botón para abrir un formulario.
 * 
  */
const Contact = () => {
  /**
   * Abre el formulario de contacto en una nueva ventana.
   */
  const openContactForm = () => {
    const formUrl = 'https://forms.gle/Ga1xBTuiYPD8gj537';
    window.open(formUrl, '_blank');
  }

  return (
    <>
      <div className='Contact-Form'>
        <h1>Contacto</h1>
        <p>No dudes en contactarnos, escuchamos cada caso, nuestra atención es personalizada</p>
        <img src={contactImg} alt="Ilustración de atención" /> 
        <button className="button-FormContact" onClick={openContactForm}>
          SOLICITA TU COTIZACIÓN
        </button>
      </div>
    </>
  );
}

export { Contact };
