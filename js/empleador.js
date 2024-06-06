document.addEventListener("DOMContentLoaded", function () {
    var bodyElement = document.body;

    // Crear la sección principal
    var section = document.createElement("section");
    section.classList.add("vh-100", "gradient-custom");

    // Crear el contenedor de la fila
    var divContainer = document.createElement("div");
    divContainer.classList.add("container", "py-3");

    // Crear la fila
    var divRow = document.createElement("div");
    divRow.classList.add("row", "justify-content-center", "align-items-center");

    // Crear la columna
    var divCol = document.createElement("div");
    divCol.classList.add("col-md-6");

    // Crear la tarjeta
    var divCard = document.createElement("div");
    divCard.classList.add("card", "bg-dark", "text-white", "rounded-3");

    // Crear el cuerpo de la tarjeta
    var divCardBody = document.createElement("div");
    divCardBody.classList.add("card-body", "p-4", "text-center");
    divCardBody.style.paddingTop = "100px";
    divCardBody.style.paddingBottom = "100px";

    // Crear el título "Iniciar Sesión"
    var h2 = document.createElement("h2");
    h2.classList.add("fw-bold", "mb-3", "text-uppercase");
    h2.textContent = "Iniciar Sesión";

    // Crear el subtítulo "Empleado"
    var h3 = document.createElement("h3");
    h3.classList.add("fw-bold", "mb-3", "text-uppercase", "text-white-50");
    h3.textContent = "Empleador";

    // Crear la imagen del logo
    var imgLogo = document.createElement("img");
    imgLogo.src = "https://coally.com/wp-content/uploads/2023/02/LOGO8-2.png";
    imgLogo.alt = "Logo";
    imgLogo.classList.add("img-fluid", "mb-3");
    imgLogo.style.maxWidth = "250px";
    imgLogo.style.position = "relative";
    imgLogo.style.left = "3px";

    // Crear el formulario
    var form = document.createElement("form");

    // Crear el campo de correo electrónico
    var divEmail = document.createElement("div");
    divEmail.classList.add("form-outline", "form-white", "mb-3", "p-2");

    var inputEmail = document.createElement("input");
    inputEmail.type = "email";
    inputEmail.classList.add("form-control");
    inputEmail.id = "typeEmailX";
    inputEmail.placeholder = "Correo electrónico";

    divEmail.appendChild(inputEmail);

    // Crear el campo de contraseña
    var divPassword = document.createElement("div");
    divPassword.classList.add("form-outline", "form-white", "mb-3", "p-2");

    var inputPassword = document.createElement("input");
    inputPassword.type = "password";
    inputPassword.classList.add("form-control");
    inputPassword.id = "typePasswordX";
    inputPassword.placeholder = "Contraseña";

    divPassword.appendChild(inputPassword);

    // Crear el enlace "¿Olvidaste la contraseña?"
    var pForgotPassword = document.createElement("p");
    pForgotPassword.classList.add("small", "mb-3");

    var aForgotPassword = document.createElement("a");
    aForgotPassword.href = "#";
    aForgotPassword.classList.add("text-white-50");
    aForgotPassword.textContent = "¿Olvidaste la contraseña?";

    pForgotPassword.appendChild(aForgotPassword);

    // Crear el enlace "Ingresar"
    var aLogin = document.createElement("a");
    aLogin.href = "nomina.html";
    aLogin.classList.add("btn", "btn-outline-light", "btn-lg", "btn-block");
    aLogin.textContent = "Ingresar";

    // Crear el enlace "¿No tienes una cuenta? Regístrate"
    var divSignUp = document.createElement("div");
    divSignUp.classList.add("mt-3");

    var pSignUp = document.createElement("p");
    pSignUp.classList.add("mb-0");

    var aSignUp = document.createElement("a");
    aSignUp.href = "#";
    aSignUp.classList.add("text-white-50", "fw-bold");
    aSignUp.textContent = "¿No tienes una cuenta? Regístrate";

    pSignUp.appendChild(aSignUp);
    divSignUp.appendChild(pSignUp);

    // Agregar los elementos al cuerpo de la tarjeta
    divCardBody.appendChild(h2);
    divCardBody.appendChild(h3);
    divCardBody.appendChild(imgLogo);
    divCardBody.appendChild(form);
    form.appendChild(divEmail);
    form.appendChild(divPassword);
    form.appendChild(pForgotPassword);
    form.appendChild(aLogin);
    divCardBody.appendChild(divSignUp);

    // Agregar el cuerpo de la tarjeta a la tarjeta
    divCard.appendChild(divCardBody);

    // Agregar la tarjeta a la columna
    divCol.appendChild(divCard);

    // Agregar la columna a la fila
    divRow.appendChild(divCol);

    // Agregar la fila al contenedor de la fila
    divContainer.appendChild(divRow);

    // Agregar el contenedor de la fila al contenedor principal
    section.appendChild(divContainer);

    // Agregar el contenedor principal al body del documento
    bodyElement.appendChild(section);
});

