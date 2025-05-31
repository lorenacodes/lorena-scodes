// Menu responsivo (caso deseje adicionar ícone de hambúrguer)
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('ativo');
  });
}

function toggleTexto() {
  const texto = document.querySelector('.mais-texto');
  const botao = document.querySelector('.ler-mais-btn');
  
  if (texto.style.display === "inline") {
    texto.style.display = "none";
    botao.textContent = "Ler mais";
  } else {
    texto.style.display = "inline";
    botao.textContent = "Ler menos";
  }
}


// Scroll suave para âncoras (opcional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
