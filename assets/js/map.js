document.addEventListener("DOMContentLoaded", (event) => {

    setTimeout(() => {
       document.querySelector('#load-iframe-map').innerHTML = `
         <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5447.2545213851845!2d-58.55745437976895!3d-34.442369580924435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1757366815421!5m2!1ses!2sar" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `;
    }, 1000);


});