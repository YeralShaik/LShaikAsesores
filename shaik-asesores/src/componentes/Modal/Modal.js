// ModalComponent.jsx
import React, { useState } from 'react';
import Modal from 'react-modal';

const CustomModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    
      <h2>Modal de Ejemplo</h2>
      <p>Contenido del modal...</p>
    
    
  );
};

export { CustomModal };
