import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsCheckCircleFill } from "react-icons/bs";
import questionImg from '../../asset/mujer-dinero-min.png'
import './style.css'

const Questions = () => {
    // Estado para controlar si la pregunta está abierta o cerrada
    const [openIndex, setOpenIndex] = useState(null);

    const frequentQuestion = [
        {
            question: '¿Qué documentos necesitas para acceder a un préstamo personal?',
            answer: 'Los documentos que verifiquen tu identidad como cedula vigente, carnet de trabajo y en segundo lugar los que confirmen tu posición y estatus laboral como carta de trabajo y talonario o comprobante de pago. Además, necesitarás documentos que prueben la dirección de tu domicilio: recibo de utilidad (luz, internet, agua) son los más frecuentes. No importa si no están a tu nombre lo importante es que coincida con la dirección domiciliaria que utilizas en la documentación para el prestamo. También te pedirán referencias personales de familiares o amigos que no vivan contigo al cual puedan contactar en caso de que usted cambiase de número y sea importante ubicar.',
        },
        {
            question: '¿En qué tiempo recibo el desembolso?',
            answer: 'Una vez que el acuerdo de préstamo se firme y se devuelva, El banco, cooperativa o financiera desembolsará los fondos. En la mayoría de los casos, se recibe el dinero del préstamo con un depósito directo en la cuenta bancaria que se aperturó para el desembolso. Este proceso no debería ser mayor a 15 dias considerando como día 1 el momento donde queda completa toda la documentación.',
        },
        {
            question: '¿Cuál es la reputación y experiencia de SHAIK?',
            answer: 'Durante 22 años de trayectoria, a través de asesorías gratuitas, nuestros asesores expertos han ayudado a mejorar la salud financiera de más de 6 mil clientes en todo Panamá. Logrando una efectividad en aprobación del 90% de los préstamos tramitados.',
        },
        {
            question: '¿Cuál es la reputación y experiencia de SHAIK?',
            answer: 'Con mas de 30 años de trayectoria, a través de asesorías gratuitas, nuestros asesores expertos han ayudado a mejorar la salud financiera de más de 6 mil clientes en todo Panamá. Logrando una efectividad en aprobación del 90% de los préstamos tramitados.',
        }
    ];

    // Función para manejar el click en la pregunta
    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return(
        <section className="Question-Section">
          <h1 className="Question-Title">Preguntas Frecuentes</h1>
          <p className="question-text">   </p>
          <div className="questions-Container">
              {frequentQuestion.map((data, index)=> (
                  <div className="text-container" key={index}>
                      <h4 className="question" onClick={() => handleToggle(index)}>
                          {data.question} 
                          {openIndex === index ? 
                              <IoIosArrowUp className="arrowUp " /> :
                              <IoIosArrowDown className="arrowDown " />
                          }
                      </h4>
                      {openIndex === index && 

                          <p className="answer active">
                              <BsCheckCircleFill className="checkIcon" />
                              {data.answer}
                          </p>
                      }
                  </div>
              ))}
            
          </div>
          <img src={questionImg} alt="Icono de empresa privada" />
        </section>
    );
}

export {Questions};
