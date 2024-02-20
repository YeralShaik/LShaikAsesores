import React from "react";
import './style.css'


const Main = () => {

    return(

        <section class="main-section">
            <div class="main-container">
                <img src="./assets/pngwing 8.png" alt="dinero" />
                <div class="main-container-text">
                    <h1 class="main-title">¿NECESITAS DINERO?</h1>
                    <h2 class="main-subtitle-title">¡No tienes capacidad o tienes mala apc!</h2>
                    <p class="main-subtitle">No te preocupes por tu APC</p>
                    <button  id="quote-button" >Cotiza </button>                 
                </div>
            </div>
        </section>
    )

}

export { Main }