document.addEventListener("DOMContentLoaded", function () {
    var bodyElement = document.body;

    bodyElement.style.backgroundImage = "url('https://www.cesde.edu.co/wp-content/uploads/2021/03/La-fundacion-Juanfe-Comfama-y-Cesde.jpg')";
    bodyElement.style.backgroundSize = "cover"; // Cubrir toda la pantalla
    bodyElement.style.backgroundRepeat = "no-repeat"; // No repetir la imagen
    bodyElement.style.minHeight = "100vh"; // Asegurar que el body tenga al menos el 100% de la altura de la ventana
    bodyElement.style.display = "flex"; // Usar flexbox para alinear el contenido
    bodyElement.style.flexDirection = "column"; // Disponer los elementos en columna
    bodyElement.style.justifyContent = "center"; // Centrar el contenido verticalmente
    bodyElement.style.alignItems = "center"; // Centrar el contenido horizontalmente

     // Añadir margen superior y padding al body para extender la imagen hacia arriba y hacia abajo
     bodyElement.style.marginTop = "-50px";
     bodyElement.style.paddingTop = "50px";
     bodyElement.style.marginBottom = "-50px";
     bodyElement.style.paddingBottom = "50px";


    var nav = document.createElement("nav");
    nav.classList.add("navbar", "navbar-expand-lg", "navbar-light", "bg-body-tertiary", "fixed-top");
    nav.style.backgroundColor = "#e23e7f ";

    var divContainer = document.createElement("div");
    divContainer.classList.add("container-fluid");
    divContainer.style.backgroundColor = " #eb2c7b "; // Fondo rosado para divContainer

    var imgLogo = document.createElement("img");
    imgLogo.src = "Logo!!.png";
    imgLogo.alt = "Cesde Logo";
    imgLogo.style.padding = "20px";
    imgLogo.style.width = "250px";
    imgLogo.style.marginRight = "20px"; // Espaciado derecho de la imagen

    var divCollapse = document.createElement("div");
    divCollapse.classList.add("collapse", "navbar-collapse");
    divCollapse.id = "navbarNav";

    var ulNav = document.createElement("ul");
    ulNav.classList.add("navbar-nav");
    ulNav.style.marginTop = "10px"; // Añadir margen superior a ulNav

    var liInicioEmpleador = document.createElement("li");
    liInicioEmpleador.classList.add("nav-item");

    var aInicioEmpleador = document.createElement("a");
    aInicioEmpleador.classList.add("nav-link", "active");
    aInicioEmpleador.setAttribute("aria-current", "page");
    aInicioEmpleador.href = "sesionEmpleador.html";
    aInicioEmpleador.textContent = "Inicio empleador";
    aInicioEmpleador.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.5)"; // Añadir sombra al texto
    aInicioEmpleador.style.backgroundColor = "rgba(255, 255, 255, 0.5)"; // Fondo semitransparente para el contenedor del enlace
    aInicioEmpleador.style.color = "white"; // Color del texto blanco
    aInicioEmpleador.style.padding = "10px"; // Espaciado interno
    aInicioEmpleador.style.borderRadius = "5px"; // Bordes redondeados
    aInicioEmpleador.style.marginRight = "10px"; // Espaciado entre los elementos
    

    liInicioEmpleador.appendChild(aInicioEmpleador);

    var liInicioEmpleado = document.createElement("li");
    liInicioEmpleado.classList.add("nav-item");

    var aInicioEmpleado = document.createElement("a");
    aInicioEmpleado.classList.add("nav-link");
    aInicioEmpleado.href = "sesionEmpleado.html";
    aInicioEmpleado.textContent = "Inicio empleado";
    aInicioEmpleado.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.5)"; // Añadir sombra al texto
    aInicioEmpleado.style.backgroundColor = "rgba(255, 255, 255, 0.5)"; // Fondo semitransparente para el contenedor del enlace
    aInicioEmpleado.style.color = "white"; // Color del texto blanco
    aInicioEmpleado.style.padding = "10px"; // Espaciado interno
    aInicioEmpleado.style.borderRadius = "5px"; // Bordes redondeados

    liInicioEmpleado.appendChild(aInicioEmpleado);

    ulNav.appendChild(liInicioEmpleador);
    ulNav.appendChild(liInicioEmpleado);

    divCollapse.appendChild(ulNav);

    divContainer.appendChild(imgLogo);
    divContainer.appendChild(divCollapse);

    nav.appendChild(divContainer);

    bodyElement.appendChild(nav);

    // FOOTER

    var footer = document.createElement("footer");
    footer.classList.add("bg-body-tertiary", "text-center", "footer");

    var divContainerFooter = document.createElement("div");
    divContainerFooter.classList.add("container", "p-4");

    footer.appendChild(divContainerFooter);

    var copyrightDiv = document.createElement("div");
    copyrightDiv.classList.add("text-center", "p-3");
    copyrightDiv.style.backgroundColor = "rgba(0, 0, 0, 0.05)";

    var copyrightText = document.createTextNode("© 2020 Copyright:");

    var mdBootstrapLink = document.createElement("a");
    mdBootstrapLink.href = "https://mdbootstrap.com/";
    mdBootstrapLink.classList.add("text-body");
    mdBootstrapLink.textContent = "MDBootstrap.com";

    copyrightDiv.appendChild(copyrightText);
    copyrightDiv.appendChild(mdBootstrapLink);

    footer.appendChild(copyrightDiv);

    bodyElement.appendChild(footer);

    footer.style.position = "fixed";
    footer.style.bottom = "0";
    footer.style.left = "0";
    footer.style.width = "100%";
});





/* document.addEventListener("DOMContentLoaded", function () {

    var bodyElement = document.body;

    var nav = document.createElement("nav");

    nav.classList.add("navbar navbar-expand-lg navbar-light bg-body-tertiary")
    nav.setAttribute(
        "style", "background-color: deeppink;"

    )
    bodyElement.appendChild(nav);

    var div = document.createElement("div");
    div.classList.add("container-fluid");

    var img = document.createElement("img");
    img.setAttribute(

        "src",
        "https://fecoordi.com/images/convenios/logos/cesde.png"

    )

    img.setAttribute(

        "style",
        "width: 250px;"

    )
    nav.appendChild(div);

    var div2 = document.createElement("div");
    div2.classList.add("collapse navbar-collapse");
    const div2 = this.getElementById("div");
    div2.id = "navbarNav"
    div.appendChild(div2);

    var ul = document.createElement("ul");
    ul.classList.add("navbar-nav");
    div2.appendChild(ul);

    var il = document.createElement("il");
    il.classList.add("nav")
    ul.appendChild(li);

    var a = document.createElement("a");
    a.classList.add("nav-link active");

    a.setAttribute(
        "aria-current", "page"

    )

    a.setAttribute(
        "href", "sesionEmpleado.html"
    )

    a.textContent = "Inicio empleado"

    li.appendChild(a);

    var il2 = document.createElement("il");
    il.classList.add("nav-link")
    ul.appendChild(li2);

    var a2 = document.createElement("a");
    a.classList.add("nav-link active");

    a2.setAttribute(
        "href", "sesionEmpleado.html"
    )

    li2.appendChild(a2);

});  */



/* document.addEventListener("DOMContentLoaded", function () {

    var bodyElement = document.body;

    var nav = document.createElement("nav");
    nav.classList.add("navbar", "navbar-expand-lg", "navbar-light", "bg-body-tertiary");
    nav.style.backgroundColor = "deeppink";

    var div = document.createElement("div");
    div.classList.add("container-fluid");

    var img = document.createElement("img");
    img.src = "https://fecoordi.com/images/convenios/logos/cesde.png";
    img.style.width = "250px";

    var div2 = document.createElement("div");
    div2.classList.add("collapse", "navbar-collapse");
    div2.id = "navbarNav";

    var ul = document.createElement("ul");
    ul.classList.add("navbar-nav");

    var li = document.createElement("li");
    li.classList.add("nav-item");

    var a = document.createElement("a");
    a.classList.add("nav-link", "active");
    a.setAttribute("aria-current", "page");
    a.href = "sesionEmpleado.html";
    a.textContent = "Inicio empleado";

    var li2 = document.createElement("li");
    li2.classList.add("nav-item");

    var a2 = document.createElement("a");
    a2.classList.add("nav-link", "active");
    a2.href = "sesionEmpleado.html";

    img.setAttribute(

        "src",
        "https://fecoordi.com/images/convenios/logos/cesde.png"

    )

    img.setAttribute(

        "style",
        "width: 250px;"

    )

    li.appendChild(a);
    li2.appendChild(a2);
    ul.appendChild(li);
    ul.appendChild(li2);
    div2.appendChild(ul);
    div.appendChild(div2);
    nav.appendChild(div);
    bodyElement.appendChild(nav);
}); */




/* document.addEventListener("DOMContentLoaded", function () {
    var bodyElement = document.body;

    var nav = document.createElement("nav");
    nav.classList.add("navbar", "navbar-expand-lg", "navbar-light", "bg-body-tertiary");
    nav.style.backgroundColor = "deeppink";

    var div = document.createElement("div");
    div.classList.add("container-fluid");

    var img = document.createElement("img");
    img.src = "https://fecoordi.com/images/convenios/logos/cesde.png";
    img.style.width = "250px";

    var div2 = document.createElement("div");
    div2.classList.add("collapse", "navbar-collapse");
    div2.id = "navbarNav";

    var ul = document.createElement("ul");
    ul.classList.add("navbar-nav");

    var li = document.createElement("li");
    li.classList.add("nav-item");

    var a = document.createElement("a");
    a.classList.add("nav-link", "active");
    a.setAttribute("aria-current", "page");
    a.href = "sesionEmpleado.html";
    a.textContent = "Inicio empleado";

    var li2 = document.createElement("li");
    li2.classList.add("nav-item");

    var a2 = document.createElement("a");
    a2.classList.add("nav-link", "active");
    a2.href = "sesionEmpleado.html";
    a2.textContent = "Otro enlace"; // Agregué este texto para verificar si el segundo enlace aparece

    li.appendChild(a);
    li2.appendChild(a2);
    ul.appendChild(li);
    ul.appendChild(li2);
    div2.appendChild(ul);
    div.appendChild(div2);
    nav.appendChild(div);
    bodyElement.appendChild(nav);
});
 */



/* document.addEventListener("DOMContentLoaded", function () {
    var bodyElement = document.body;

    var nav = document.createElement("nav");
    nav.classList.add("navbar", "navbar-expand-lg", "navbar-light", "bg-body-tertiary");
    nav.style.backgroundColor = "deeppink";

    var div = document.createElement("div");
    div.classList.add("container-fluid");

    var img = document.createElement("img");
    img.src = "https://fecoordi.com/images/convenios/logos/cesde.png";
    img.style.width = "250px";

    div.appendChild(img); // Agregamos la imagen al div

    var div2 = document.createElement("div");
    div2.classList.add("collapse", "navbar-collapse");
    div2.id = "navbarNav";

    var ul = document.createElement("ul");
    ul.classList.add("navbar-nav");

    var li = document.createElement("li");
    li.classList.add("nav-item");

    var a = document.createElement("a");
    a.classList.add("nav-link", "active");
    a.setAttribute("aria-current", "page");
    a.href = "sesionEmpleado.html";
    a.textContent = "Inicio empleado";

    var li2 = document.createElement("li");
    li2.classList.add("nav-item");

    var a2 = document.createElement("a");
    a2.classList.add("nav-link", "active");
    a2.href = "sesionEmpleado.html";
    a2.textContent = "Otro enlace";

    li.appendChild(a);
    li2.appendChild(a2);
    ul.appendChild(li);
    ul.appendChild(li2);
    div2.appendChild(ul);
    div.appendChild(div2);
    nav.appendChild(div);
    bodyElement.appendChild(nav);
}); */



