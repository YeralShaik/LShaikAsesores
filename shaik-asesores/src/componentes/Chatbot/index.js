import React, { useState } from 'react';
import Modal from 'react-modal';

const MiComponente = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [preguntasRespuestas, setPreguntasRespuestas] = useState([]);
  const [inputRespuesta, setInputRespuesta] = useState('');

  const abrirModal = () => {
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    // Reiniciar el estado al cerrar el modal
    setPreguntasRespuestas([]);
    setInputRespuesta('');
  };

 
  const sendMsj = () => {
    // Agregar la pregunta y la respuesta al array de preguntasRespuestas
    setPreguntasRespuestas([
      ...preguntasRespuestas,
     {
        pregunta1: '¿Donde labora?',
        respuesta1: inputRespuesta,
      },
      {
        pregunta: '¿Cuanto tiene en el empleo?',
        respuesta: inputRespuesta,
      },
    ]);


    // Verificar la respuesta específica y proporcionar una respuesta personalizada
  if (inputRespuesta === '4 meses') {
    alert('Debe enviar los requisitos');
  }
    // Limpiar el campo de entrada después de enviar el mensaje
    setInputRespuesta('');
  };

  return (
    <div>
      <button onClick={abrirModal}>Abrir Modal</button>

      <Modal
        isOpen={modalAbierto}
        onRequestClose={cerrarModal}
        contentLabel="Ejemplo de Modal"
      >
        <h2>Mi Modal</h2>
        {preguntasRespuestas.map((item, index) => (
          <div key={index}>
            <p>Pregunta: {item.pregunta}</p>
            <p>Respuesta: {item.respuesta}</p>
          </div>
        ))}


        <div>
          <input
            className='input-respuesta'
            placeholder='Escribe tu mensaje'
            value={inputRespuesta}
            onChange={(e) => setInputRespuesta(e.target.value)}
          />
          <button onClick={sendMsj}>Enviar</button>
        </div>

        <button onClick={cerrarModal}>Cerrar Modal</button>
      </Modal>
    </div>
  );
};

export default MiComponente;
