import React from "react";
import { Main } from "../../components/Main";
import { ApplyProcess } from "../../components/Services-Process";
import { Services } from '../../components/Services'
import { Contact } from "../Contact";

/**
 * Página principal que renderiza los componentes principales de la aplicación.
 * Incluye la sección principal, el proceso de servicios, la sección de aplicantes y la sección de contacto.
 */
const Home = () => {
  return (
    <>
      {/* Sección principal */}
      <Main />

      {/* Proceso de servicios */}
      <ApplyProcess />

      {/* Sección de aplicantes */}
      <Services />

      {/* Sección de contacto */}
      <Contact />
    </>
  );
}

export { Home };
