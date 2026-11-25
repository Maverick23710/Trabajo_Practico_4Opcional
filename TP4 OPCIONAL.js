const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const clave = document.getElementById("clave");
const mensaje = document.getElementById("mensaje");

// Marca un campo como válido o inválido
function marcar(input, errorId, esValido, textoError) {
  const error = document.getElementById(errorId);
  if (esValido) {
    input.className = "valido";
    error.textContent = "";
  } else {
    input.className = "invalido";
    error.textContent = textoError;
  }
  return esValido;
}

function validarNombre() {
  return marcar(nombre, "error-nombre", nombre.value.trim() !== "", "El nombre no puede estar vacío");
}

function validarCorreo() {
  const formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return marcar(correo, "error-correo", formatoCorreo.test(correo.value), "Ingresá un correo válido");
}

function validarClave() {
  return marcar(clave, "error-clave", clave.value.length >= 8, "La contraseña debe tener al menos 8 caracteres");
}

// Validación en tiempo real
nombre.addEventListener("input", validarNombre);
correo.addEventListener("input", validarCorreo);
clave.addEventListener("input", validarClave);

// Envío del formulario
formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  const okNombre = validarNombre();
  const okCorreo = validarCorreo();
  const okClave = validarClave();

  if (okNombre && okCorreo && okClave) {
    mensaje.textContent = "Formulario enviado correctamente";
    formulario.reset();
    nombre.className = "";
    correo.className = "";
    clave.className = "";
  } else {
    mensaje.textContent = "";
  }
});
