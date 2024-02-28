import React from "react";
import asesoreImg from '../../asset/happy-diverse-business-partners-closing-deal.jpg'
import './style.css'


const Nosotros = () => {
    return(
      <>
            <h1>"QUIENES SOMOS"</h1>
            <h3>"SOMOS LA SOLUCION A TUS PROBLEMAS"</h3>
            <div 
                className="about-container">
                <p> <strong className="about-title">Quienes Somos </strong> <br/>
                <span>Colaboramos con todas las instituciones crediticias para ayudarte a mejorar tu historial crediticio, obtener tu primer crédito y acceder a préstamos con garantías hipotecarias. Confía en nosotros para tus necesidades financieras, ¡estamos aquí para ayudarte a alcanzar tus objetivos!".</span>
                </p>
                <img src={asesoreImg} alt=""/>
            </div>
            <div class="about-container-card">
                <div class="card-Vision">
                    <p>Visión</p>
                    <span>Nos dedicamos apasionadamente a servir a nuestros clientes con excelencia, priorizando la satisfacción de sus necesidades y la resolución de sus desafíos financieros. Lo hacemos con un compromiso inquebrantable con la confianza y la responsabilidad, guiándonos por nuestros valores fundamentales en cada interacción.</span>
            </div>
            <div class="card-Mision">
                <p>Misión</p>
                <span>Ser la empresa líder preferida por los clientes y familias que buscan lograr estabilidad financiera y alcanzar sus sueños económicos. Nos esforzamos por ser reconocidos como líderes en asesoramiento crediticio y soluciones financieras innovadoras..</span>
            </div>
        </div>
   
        </>
    )
}

export { Nosotros}