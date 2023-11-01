const contenedoregistrar = document.querySelector(".signup-container");
const contenedoriniciar = document.querySelector(".login-container");

function ToggleRegistrarUsuario() {
    if (contenedoregistrar.style.display === "none") {
      contenedoregistrar.style.display = "block"; // Para mostrar el contenedor
      contenedoriniciar.style.display = "none";
    } else {
      contenedoregistrar.style.display = "none"; // Para ocultar el contenedor
      contenedoriniciar.style.display = "block";
    }
  }
  function ToggleIniciarSesion() {
    if (contenedoriniciar.style.display === "none") {
      contenedoriniciar.style.display = "block"; // Para mostrar el contenedor
      contenedoregistrar.style.display = "none";
    } else {
      contenedoriniciar.style.display = "none"; // Para ocultar el contenedor
      contenedoregistrar.style.display = "block";
    }
  }

