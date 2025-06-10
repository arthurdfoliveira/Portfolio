function saudacao() {
  const hora = new Date().getHours();
  const texto = hora < 12 ? "Olá! Bom dia" : hora < 18 ? "Olá! Boa tarde" : "Olá! Boa noite";
  const elemento = document.getElementById("saudacao");
  if (elemento) {
    elemento.textContent = `${texto}, seja bem-vindo(a)!`;
  }
}

window.addEventListener("DOMContentLoaded", saudacao);
