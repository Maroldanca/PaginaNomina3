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
    divCol.classList.add("col-md-4"); // Ajustar el tamaño de la columna a col-md-4

    // Crear la tarjeta
    var divCard = document.createElement("div");
    divCard.classList.add("card", "bg-dark", "text-white", "rounded-3");

    // Crear el cuerpo de la tarjeta
    var divCardBody = document.createElement("div");
    divCardBody.classList.add("card-body", "p-4", "text-center");
    divCardBody.style.paddingTop = "50px"; // Ajustar el padding superior
    divCardBody.style.paddingBottom = "50px"; // Ajustar el padding inferior

    // Crear el título "Registro"
    var h2 = document.createElement("h2");
    h2.classList.add("fw-bold", "mb-3", "text-uppercase");
    h2.textContent = "Registro";

    // Crear el subtítulo "Usuario"
    var h3 = document.createElement("h3");
    h3.classList.add("fw-bold", "mb-3", "text-uppercase", "text-white-50");
    h3.textContent = "EMPLEADOR";

    // Crear la imagen del logo
    var imgLogo = document.createElement("img");
    imgLogo.src = "https://coally.com/wp-content/uploads/2023/02/LOGO8-2.png";
    imgLogo.alt = "Logo";
    imgLogo.classList.add("img-fluid", "mb-3");
    imgLogo.style.maxWidth = "200px"; // Ajustar el tamaño de la imagen
    imgLogo.style.position = "relative";
    imgLogo.style.left = "3px";

    // Crear el formulario
    var form = document.createElement("form");

    // Crear el campo de nombre de usuario
    var divUsername = document.createElement("div");
    divUsername.classList.add("form-outline", "form-white", "mb-3", "p-2");

    var inputUsername = document.createElement("input");
    inputUsername.type = "text";
    inputUsername.classList.add("form-control");
    inputUsername.id = "typeUsernameX";
    inputUsername.placeholder = "Nombre de usuario";

    divUsername.appendChild(inputUsername);

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

    // Crear el campo de confirmación de contraseña
    var divConfirmPassword = document.createElement("div");
    divConfirmPassword.classList.add("form-outline", "form-white", "mb-3", "p-2");

    var inputConfirmPassword = document.createElement("input");
    inputConfirmPassword.type = "password";
    inputConfirmPassword.classList.add("form-control");
    inputConfirmPassword.id = "typeConfirmPasswordX";
    inputConfirmPassword.placeholder = "Confirmar contraseña";

    divConfirmPassword.appendChild(inputConfirmPassword);

    // Crear el botón "Registrarse"
    var aRegister = document.createElement("a");
    aRegister.href = "success.html"; // Cambia este enlace según sea necesario
    aRegister.classList.add("btn", "btn-outline-light", "btn-lg", "btn-block");
    aRegister.textContent = "Registrarse";

    // Crear el enlace "¿Ya tienes una cuenta? Inicia Sesión"
    var divLogin = document.createElement("div");
    divLogin.classList.add("mt-3");

    var pLogin = document.createElement("p");
    pLogin.classList.add("mb-0");

    var aLogin = document.createElement("a");
    aLogin.href = "index.html";
    aLogin.classList.add("text-white-50", "fw-bold");
    aLogin.textContent = "¿Ya tienes una cuenta? Inicia Sesión";

    pLogin.appendChild(aLogin);
    divLogin.appendChild(pLogin);

    // Agregar los elementos al cuerpo de la tarjeta
    divCardBody.appendChild(h2);
    divCardBody.appendChild(h3);
    divCardBody.appendChild(imgLogo);
    divCardBody.appendChild(form);
    form.appendChild(divUsername);
    form.appendChild(divEmail);
    form.appendChild(divPassword);
    form.appendChild(divConfirmPassword);
    form.appendChild(aRegister);
    divCardBody.appendChild(divLogin);

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
