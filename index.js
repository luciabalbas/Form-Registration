// Script - Practica Laboratorio - Lucia Balbás

// Variables del formulario
const form = document.getElementById("myform");
let userName = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confPassword = document.getElementById("confpassword");

// Funcion para validar Formulario
function validateForm(event) {
    alert("funcion");
    // Formulario Válido
    sendForm = true;

    // Nombre - Vacío
    if (userName.value == "") {
        error(userName, "Rellene este campo");
    }
    else {
        success(userName);
    }

    // Correo
    //Expresion Regular
    const emailRegex = new RegExp(/^(?!.*([A-Za-z0-9])\1{3})[A-Za-z0-9._%+-]{3,}\@[A-Za-z0-9-]{3,}\.[A-Za-z]{2,4}$/, "gm");
    let validEmail = emailRegex.test(email.value);
   
    if (email.value == "") {
        error(email, "Rellene este campo");
    }
    else if (validEmail == false) {
        error(email, "Email inválido");
    }
    else {
        success(email);
    }

    // Contraseña - Vacía, Mayor a 8 caracteres
    if (password.value == "") {
        error(password, "Rellene este campo");
    }
    else if (password.value.length > 8) {
        error(password, "No debe tener más de 8 caracteres");
    }
    else {
        success(password);
    }

    // Comprobación contraseña - Vacía, desigual a Contraseña
    if (confPassword.value == "") {
        error(confPassword, "Rellene este campo");
    }
    else if (confPassword.value != password.value) {
        error(confPassword, "Las contraseñas no coinciden");
    }
    else {
        success(confPassword);
    }

    // Si hay algún error - No se envía
    if (sendForm == false) {
        event.preventDefault();
    }
    else {
        alert("La inscripción se ha enviado correctamente");
    }
}

// Funcion Exito - Para el input
function success(input) {
    let parent = input.parentElement;
    let text = parent.querySelector("p");
    text.textContent = "";
    let icon = parent.querySelector("img");
    icon.src = "images/success-icon.svg";
    icon.alt = "Success";
    parent.classList.remove("error");
    parent.classList.add("success");
}

// Funcion Error - Para el input
function error(input, message) {
    let parent = input.parentElement;
    let text = parent.querySelector("p");
    text.textContent = message;
    let icon = parent.querySelector("img");
    icon.src = "images/error-icon.svg";
    icon.alt = "Error";
    parent.classList.remove("success");
    parent.classList.add("error");
    sendForm = false;
}