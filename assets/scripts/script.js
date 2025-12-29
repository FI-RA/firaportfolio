const btn = document.querySelector(".btn-toggle"); // Tu botón
const currentTheme = localStorage.getItem("theme"); // Revisa si ya había una preferencia

// Si el usuario ya tenía el modo oscuro guardado, lo aplicamos al cargar
if (currentTheme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
}

btn.addEventListener("click", () => {
  let theme = "light";

  // Si el tema actual es light, lo cambiamos a dark
  if (document.documentElement.getAttribute("data-theme") !== "dark") {
    theme = "dark";
  }

  // Aplicamos el tema y lo guardamos
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
});


const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

// Validación de Email (mientras escribe)
emailInput.addEventListener('input', () => {
  const emailValue = emailInput.value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //mensaje 

  // Condición: que contenga un @
  if (!emailValue.includes('@') || !emailValue.includes('.')) {
    emailError.style.display = 'block'; // Se muestra si es incorrecto
    emailInput.style.borderColor = '#e74c3c'; // Rojo

  } else if (!emailPattern.test(emailValue)) {
    // Si cumple con: texto + @ + dominio + .com/es/etc
    emailError.style.display = 'block'; // Se muestra si es incorrecto
    emailInput.style.borderColor = '#e74c3c'; // Rojo
  } else {
    emailError.style.display = 'none'; // Se oculta si es correcto
    emailInput.style.borderColor = '#2ecc71'; // Verde
  }

  // Si está vacío, limpiamos estilos
  if (emailValue === "") {
    emailError.style.display = 'none';
    emailInput.style.borderColor = 'none'; // Verde
  }
});

// Validación de Mensaje (mientras escribe)
messageInput.addEventListener('input', () => {
  const messageValue = messageInput.value;

  // Condición: mayor a 10 caracteres
  if (messageValue.length >= 10) {
    messageError.style.display = 'none';
    messageInput.style.borderColor = '#2ecc71';
  } else {
    messageError.style.display = 'block';
    messageInput.style.borderColor = '#e74c3c';
  }

  if (messageValue === "") {
    messageError.style.display = 'none';
    messageInput.style.borderColor = 'none'; // Verde
  }
});


//Mensaje exitoso

  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('se apreto click al form')
    //Previene el comportamiento por defecto de un evento: submit
    if (messageError.style.display === 'none' && emailError.style.display === 'none' ){
      document.getElementById('fail-send-message').style.display = 'none';
      document.getElementById('success-message').style.display = 'block';
      document.getElementById('success-message').style.color = '#2ecc71';
    } else {
      document.getElementById('success-message').style.display = 'none';
      document.getElementById('fail-send-message').style.display = 'block';
      document.getElementById('fail-send-message').style.color = '#e74c3c';
    }
})
