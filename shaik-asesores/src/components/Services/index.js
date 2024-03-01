import React from "react";
import { WhatsApp } from "../WhatsappButton";
import './style.css'


// Componente que muestra las categorías de personas que pueden aplicar.
const Services = () => {
    const servicesData = [   
        { company: 'Préstamos Personales' }, 
        { company: 'Consolidación de cuentas' },
        { company: 'Consolidación de cuentas' },
        { company: 'Préstamos con Garantia de Hipotecas' },
        { company: 'Préstamos para MicroEmpresarios' }, 
        { company: 'Independientes' }
    ];

    return (

        <>
           <h1>Ofrecemos</h1>
           <div className=" service-container-services">
            {servicesData.map((data, index) => (
                <div className="service" key={index}>
                    <p>{data.company}</p>
            </div>
            ))}
              <WhatsApp/>
        </div>
        
        </>
        
    );
}

export { Services};
