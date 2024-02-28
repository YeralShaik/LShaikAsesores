// CheckWindow.js
import React from 'react';


const CheckWindow = ({ closeModal }) => {
  return (
    <div>
      <h2>Contenido del CheckWindow</h2>
      <p>Este es el contenido que se mostrará en el modal de CheckWindow.</p>
      <button onClick={closeModal}>Cerrar Modal</button>
    </div>
  );
};

export {CheckWindow};
