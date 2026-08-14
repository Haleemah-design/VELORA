const createAccountForm =
document.getElementById(
    "createAccountForm"
);

createAccountForm.addEventListener(
    "submit",
    function(event){

        event.preventDefault();

        const password =
        document.getElementById(
            "password"
        ).value;

        const confirmPassword =
        document.getElementById(
            "confirmPassword"
        ).value;

        if(
            password !==
            confirmPassword
        ){

            alert(
                "Passwords do not match."
            );

            return;
        }

        alert(
            "Account created successfully. Welcome to VÉLORA!"
        );

        createAccountForm.reset();

    }
);