import React from "react";
import './style.css'

const Aplican = () => {

  
    return (
        <>
                    
            <h2>¿QUIENES APLICAN?</h2>
            <h3>"Te Asesoramos con tus Préstamos Personales y te ayudamos a mejorar tu APC"</h3>
            <div className="service-container-services">
            <button  className="service">
                <p className="service-p">EMPRESA PRIVADA</p>
            </button>
            <div  className="service-green">
                <p className="service-p">GOBIERNO</p>
            </div>
            <div  className="service">
                <p className="service-p">INDEPENDIENTES</p>
            </div>
            <div  className="service-green">
                <p className="service-p">GARANTIAS HIPOTECARIAS</p>
            </div>
            <div  className="service">
                    <p className="service-p">JUBILADOS</p>
            </div>
            <div  className="service-green">
                    <p className="service-p">MICROEMPRESARIOS</p>
            </div>                    
            </div> 

    </>
    )
}

export { Aplican}