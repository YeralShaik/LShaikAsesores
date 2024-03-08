// ModalComponent.jsx
import React, { useState } from 'react';
import Modal from 'react-modal';

const CustomModal = ({ isOpen, closeModal }) => {
  const [selectAnswer, setSelectAnswer] = useState(Array(6).fill(null));

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
    <>
      {/* Modal */}
      <Modal
        isOpen={isOpen}
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
    </>
  );
};

export { CustomModal };
