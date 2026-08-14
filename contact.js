const contactForm =
document.querySelector(".contact-form");

contactForm.addEventListener(
    "submit",
    function(event){

        event.preventDefault();

        alert(
            "Thank you for contacting VÉLORA. We will get back to you shortly."
        );

        contactForm.reset();

    }
);