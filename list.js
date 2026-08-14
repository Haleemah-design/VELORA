const propertyForm =
    document.querySelector(".property-form");


propertyForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const hostName =
            document.querySelector("#hostName").value;


        alert(
            `Thank you, ${hostName}! Your property listing request has been submitted. Our team will be in touch soon.`
        );


        propertyForm.reset();

    }
);