let email = document.getElementById("email");
let password = document.getElementById("password");
let eye = document.getElementById("eye");
let submitBtn = document.getElementById("submitBtn");

eye.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
})

submitBtn.addEventListener("click", () => {
    if (email.value == "") {
        alert("Please enter email");
    } else if (password.value == "") {
        alert("Please enter password");
    } else {
        alert("Success");
    }
})