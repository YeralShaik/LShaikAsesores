import React from "react";
import instagramLogo from '../../asset/instagram.png';
import emailLogo from '../../asset/mail.png';
import './style.css'

const Footer = () => {
    return ( 
        <> 
        <footer class="container-footer">
                <p>Síguenos en redes sociales</p>
                <ul>
                    <li
                        id="instagram">
                       <img src={instagramLogo} alt=""/>
                    </li>
                    <li 
                        id="mail">
                        <img src={emailLogo} alt=""/> 
                    </li>
                </ul>
                <p class="firma">Hecho por @YeraldinShaik</p>
        </footer>
    </>
    )
}

export { Footer }