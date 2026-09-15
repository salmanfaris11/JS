    let username = "Salman Faris k";
    let age = 23;
    let password = "Salman0@123";
    let address = "Malappuram, Peinthalmanna, Kerala";
    let email = "salman.example@gmail.com";

    let i = password;
    let j = email;

    function user() {
        if (/[A-Z]/.test(i) && /[0-9]/.test(i) && /["@#$%%^&**"]/.test(i) && /[@]/.test(j)) {
            console.log("Welcome");
            console.log("Logged In");
        }
        else {
            console.log("Unexpexted Error");
        }
    }
    user ()

