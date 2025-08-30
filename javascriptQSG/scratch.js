greetingContainer = document.getElementById("greeting");
sayHello = document.getElementById("sayHello");

function greeting() {
  greetingContainer.textContent = "Hello, World";
}

sayHello.addEventListener("click", greeting); //when it happens not before [greeting()) <= immediately]
