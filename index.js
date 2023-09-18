//botón por su ID
const quotebutton = document.getElementById ('quote-button');
const instagram = document.getElementById ('instagram');
const mail= document.getElementById ('mail');
const whatsapp = document.getElementById ('Whatsapp');

// controlador de eventos al botón para el evento de clic
quotebutton.addEventListener('click', function() {
    // Número de teléfono de WhatsApp
    const phoneNumber = '+50760483127'; 
    // Mensaje predefinido
    const message = '¡Hola! Estoy interesado en obtener una cotización.';

    // URL de WhatsApp
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
});

instagram.addEventListener('click', function() {
    const instagramURL = "https://www.instagram.com/shaikasesores/";
    window.open(instagramURL, '_blank');
});

mail.addEventListener('click', function() {
    const mailTo = 'mailto:shaikasesores@gmail.com'; 
    window.location.href = mailTo; 
});
    


