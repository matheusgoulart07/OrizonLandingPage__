document.addEventListener('DOMContentLoaded', () => {
  const hamburgerBtn = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('#mobileMenu .mobile-link');

  if (hamburgerBtn && mobileMenu) {
    // Abre e fecha o menu ao clicar no botão hambúrguer
    hamburgerBtn.addEventListener('click', () => {
      hamburgerBtn.classList.toggle('active');
      mobileMenu.classList.toggle('open');
    });

    // Fecha o menu automaticamente ao clicar em qualquer item
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburgerBtn.classList.remove('active');
        mobileMenu.classList.remove('open');
      });
    });

    // Fecha o menu se o usuário clicar fora dele
    document.addEventListener('click', (event) => {
      if (!mobileMenu.contains(event.target) && !hamburgerBtn.contains(event.target)) {
        hamburgerBtn.classList.remove('active');
        mobileMenu.classList.remove('open');
      }
    });
  }
});