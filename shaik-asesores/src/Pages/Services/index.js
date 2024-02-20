import React from "react";
import './style.css'

const Servicios = () => {
    return (
        <div className="service-container">
        <h2>OFRECEMOS PRESTAMOS PERSONALES</h2>
        <div class="service-container-services">
        <div  class="service">
            <p class="service-p">EMPRESA PRIVADA</p>
        </div>
        <div  class="service-green">
            <p class="service-p">GOBIERNO</p>
        </div>
        <div  class="service">
            <p class="service-p">INDEPENDIENTES</p>
        </div>
        <div  class="service-green">
            <p class="service-p">GARANTIAS HIPOTECARIAS</p>
        </div>
        <div  class="service">
                <p class="service-p">JUBILADOS</p>
        </div>
        <div  class="service-green">
                <p class="service-p">MICROEMPRESARIOS</p>
        </div>                    
         </div> 
    </div>

    )
}

export { Servicios}