// Main.jsx
import React, { useState } from 'react';
import mainImg from '../../asset/dinero.png';
import clientimg from '../../asset/happy-caucasian-woman-shaking-hands-with-latin-man-during-business-meeting-with-lawyer-manager-hiring-beautiful-professional-woman-new-job.jpg';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { BannerHome } from '../../Pages/Home/Banner';
import { CustomModal } from '../Modal/Modal';
import './modal.css';
import './style.css';

/**
 * Componente principal que representa la sección principal de la aplicación.
 * Incluye una imagen principal, un formulario modal y una sección secundaria.
 * */
const Main = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };


  return (
    <>
   
      <div className="main-container">
        <IoIosArrowBack className="arrow-icon-right active" />
        <img src={mainImg} alt="dinero" />
        <div className="main-container-text">
          <h1 className="main-title">¿NECESITAS DINERO?</h1>
          <h2 className="main-subtitle-title">¡No tienes capacidad o tienes mala apc!</h2>
          <p className="main-subtitle">No te preocupes por tu APC'</p>
          <h2 className="main-subtitle-title">¡Sin costo!</h2>
          <button onClick={openModal} className="apply-Button">
            Descubre YA si Aplicas!
          </button>
        </div>

      </div>
     
      {/* Pasar propiedades al componente CustomModal */}
      <CustomModal isOpen={modalIsOpen} closeModal={closeModal} />
    </>
  );
};

export { Main };
 