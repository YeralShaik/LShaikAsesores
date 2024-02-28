import React from "react";
import './style.css'

const Servicios = () => {
    return (
        <>
                    
            <h2>OFRECEMOS PRESTAMOS PERSONALES</h2>
            <div className="service-container-services">
            <div  className="service">
                <p className="service-p">EMPRESA PRIVADA</p>
            </div>
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

export { Servicios}