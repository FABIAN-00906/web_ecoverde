document
.getElementById("contactForm")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert(
        "Mensaje enviado correctamente. Gracias por contactarnos."
    );

    this.reset();
});