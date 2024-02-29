import React from "react";
import './style.css'

const Contact = () => {
    return(
        <>
        
        <div className='Contact-Form'>
        <h1>Contacto</h1>

         <form>
         <h4>SOLICITA UNA COTIZACION</h4>
            <p>No dudes en contactarnos, escuchamos cada caso, nuestra atención es personalizada</p>
            <input type="text" placeholder="Nombre" />
            <input type="text" placeholder="Teléfono" />
            <input type="email" placeholder="Email"/>
            <input  className="comment" type="text" placeholder="Explicanos tu caso"/>
          </form>
        </div>
      </>
      
    )
}

export { Contact }