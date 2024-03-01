import React from "react";
import './syle.css'


const ServiceCard = ({ typeCompany, content, img }) => {

  return (

        <div className="card-Container">
        <img src={img} alt="Icono de empresa privada" />
        <h2>{typeCompany}</h2>
        <p>{content}</p>
    
        </div>

      
    )

}


export { ServiceCard }