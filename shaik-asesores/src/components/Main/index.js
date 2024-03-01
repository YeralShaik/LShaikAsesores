// Main.jsx
import React, { useState } from 'react';
import Modal from 'react-modal';
import mainImg from '../../asset/dinero.png';
import clientimg from '../../asset/happy-caucasian-woman-shaking-hands-with-latin-man-during-business-meeting-with-lawyer-manager-hiring-beautiful-professional-woman-new-job.jpg';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import './modal.css';
import './style.css';


/**
 * Componente principal que representa la sección principal de la aplicación.
 * Incluye una imagen principal, un formulario modal y una sección secundaria.
 * */
const Main = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectAnswer, setSelectAnswer] = useState(Array(6).fill(null)); // Initialize with the correct length

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
/**
   * Maneja la selección de respuestas en el formulario modal.
   * @param {number} questionIndex - Índice de la pregunta.
   * @param {number} optionIndex - Índice de la opción seleccionada.
   */
  const handleSelectAnswer = (questionIndex, optionIndex) => {
    const newSelectAnswer = [...selectAnswer];
    newSelectAnswer[questionIndex] = optionIndex;
    setSelectAnswer(newSelectAnswer);
  };

   // Definición de las preguntas del formulario modal.
  const questions = [
    {
      question: "¿Donde Laboras?",
      options: ["Empresa Privada", "Gobierno", "Profesional de la salud", "Jubilado"]
    },
    {
      question: "¿Tiempo en el empleo?",
      options: ["Menos de 6 meses", "6 a 12 meses", "12 a 24 meses", "24 meses o mas"]
    },
    {
      question: "¿Estatus en el Empleo?",
      options: ["Permanente", "Eventual", "Independiente", "Jubilado"]
    },
    {
      question: "¿Mantiene descuentos de su salario?",
      options: ["Sí", "No", "Pensión"]
    },
    {
      question: "¿Cuentas con compromisos en APC?",
      options: ["Sí", "No"]
    },
    {
      question: "", // Puedes dejar el texto en blanco si no hay una pregunta específica aquí
      options: ["Tarjeta de créditos", "Embargo"]
    }
  ];

  return (
    <div className="main-section">
      <div className="main-container">
        <IoIosArrowBack className="arrow-icon-right active" />
        <img src={mainImg} alt="dinero" />
        <div className="main-container-text">
          <h1 className="main-title">¿NECESITAS DINERO?</h1>
          <h2 className="main-subtitle-title">¡No tienes capacidad o tienes mala apc!</h2>
          <p className="main-subtitle">No te preocupes por tu APC</p>
          <button onClick={openModal} className="apply-Button">
            Descubre YA si Aplicas!
          </button>
        </div>
        <IoIosArrowForward className="arrow-icon-left" />
      </div>
      <div className="main-secondContainer active">
        <IoIosArrowBack className="arrow-icon-right active" />
        <img className="clientImg" src={clientimg} alt="dinero" />
        <div className="main-container-text02">
          <h1 className="main-title">TE AYUDAMOS A MEJORAR TUS FINANZAS </h1>
          <h2 className="main-subtitle-title">¡Sin costo!</h2>
          <p className="main-subtitle">No te preocupes por tu APC</p>

          <button id="quote-button">Cotiza</button>
        </div>
        <IoIosArrowForward className="arrow-icon-left" />
      </div>


      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Ejemplo de Modal"
        className='customModal'
      >
        <button className='close-button' onClick={closeModal}>X</button>
        <div className='modal-container'>
          <h2 className='modal-title'>VERIFICATE</h2>
          {questions.map((q, questionIndex) => (
            <div key={questionIndex} className='question-modal-container'>
              <p>{q.question}</p>
              {q.options.map((option, optionIndex) => (
                <button
                  key={optionIndex}
                  className={selectAnswer[questionIndex] === optionIndex ? 'selected' : ''}
                  onClick={() => handleSelectAnswer(questionIndex, optionIndex)}
                >
                  {option}
                </button>
              ))}
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export { Main };
