function iniciarSesion(event) {
  event.preventDefault(); // Evita que se envíe el formulario

  var correo = document.getElementById("correo-input").value;
  var contrasena = document.getElementById("contrasena-input").value;

  // Comprobamos si el navegador es compatible con localStorage
  if (typeof localStorage !== "undefined") {
    // Obtenemos los registros existentes del Local Storage
    var registros = JSON.parse(localStorage.getItem("registros"));

    if (registros) {
      // Buscamos el registro correspondiente al correo ingresado
      var registroEncontrado = registros.find(function (registro) {
        return registro.correo === correo;
      });

      if (registroEncontrado && registroEncontrado.contrasena === contrasena) {
        // Inicio de sesión exitoso, redireccionar a otra página
        window.location.href = "../html/calendario.html";
        alert("Inicio de sesión exitoso");
      } else {
        alert("Correo o contraseña incorrectos");
      }
    } else {
      alert("No hay registros de usuarios almacenados");
    }
  } else {
    console.log("Lo siento, tu navegador no soporta localStorage.");
  }
} 