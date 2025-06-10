// Mobile Menu Toggle
document.getElementById('menu-icon').addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('active');
  });
  
  // Dark Mode Toggle
  const themeToggle = document.querySelector('.theme-toggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.innerHTML = document.body.classList.contains('dark-mode')
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
  });
  
  // Typewriter Effect
  const typewriter = document.querySelector('.typewriter');
  const text = typewriter.textContent;
  typewriter.textContent = '';
  let i = 0;
  
  function type() {
    if (i < text.length) {
      typewriter.textContent += text.charAt(i);
      i++;
      setTimeout(type, 100);
    }
  }
  setTimeout(type, 500);
  
  // Back to Top Button
  const backToTop = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });