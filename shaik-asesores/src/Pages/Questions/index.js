import react from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import questionImg from '../../asset/mujer-dinero.png'
import { BsCheckCircleFill } from "react-icons/bs";
import './style.css'


const Questions = () => {
    const preguntasFrecuentes = [
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
    ]



    return(
        <>
          <h1>Preguntas Frecuentes</h1>
          <div 
            className="questions-Container" >
                {preguntasFrecuentes.map((data, index)=> (
           
            <div className="text-container"
                key={index}
            >
            <h4 
                className="question"> {data.question} 
                <IoIosArrowDown className="arrowDown active"  /> 
                <IoIosArrowUp className="arrowUp active" />  </h4>
            <p className="answer active"> <BsCheckCircleFill className="checkIcon" />{data.answer}</p>
     
            </div>
          )) }
                <img src={questionImg} alt="Icono de empresa privada" />
               
          </div>
        </>
        
      
        
    


    )
}


export {Questions};