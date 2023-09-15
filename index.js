//botón por su ID
const quotebutton = document.getElementById ('quote-button');
const instagram = document.getElementById ('instagram');
const mail= document.getElementById ('mail');
const whatsappURL = document.getElementById ('Whatsapp');

// controlador de eventos al botón para el evento de clic
quotebutton.addEventListener,
whatsappURL.addEventListener('click', function() {
    // Número de teléfono de WhatsApp
    const phoneNumber = '+50760745606'; // Reemplaza con el número de teléfono que desees

    // Mensaje predefinido
    const message = '¡Hola! Estoy interesado en obtener una cotización.';

    // URL de WhatsApp
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    // Abre una nueva ventana o pestaña del navegador con la URL de WhatsApp
    window.open(whatsappURL, '_blank');
});

instagram.addEventListener('click', function() {
    const instagramURl = "https://www.instagram.com/shaikasesores/";
    window.open(instagramURl, '_blank');
});

mail.addEventListener('click', function() {
    const mail = 'shaikasesores@gmail.com';

    const mailURl = `https://mail.google.com/mail/u/0/#inbox?compose=${mail}`;

    window.open(mailURl, '_blank');
    
});

