import React from "react";
import instagramLogo from '../../asset/instagram.png';
import emailLogo from '../../asset/mail.png';
import './style.css';

/**
 * Componente que representa el pie de página de la aplicación.
 * Incluye enlaces a redes sociales y una atribución del creador.
*/
const Footer = () => {
  return ( 
    <> 
      <footer className="container-footer">
        <p>Síguenos en redes sociales</p>
        <ul>
          <li id="instagram">
            <img src={instagramLogo} alt="Logo de Instagram"/>
          </li>
          <li id="mail">
            <img src={emailLogo} alt="Logo de Correo Electrónico"/> 
          </li>
        </ul>
        <p className="sign">Hecho por @YeraldinShaik</p>
      </footer>
    </>
  );
}

export { Footer };
