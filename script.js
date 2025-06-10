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
  if (document.querySelector('.typewriter')) {
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
  }
  
  // Progress Circles
  const circles = document.querySelectorAll('.circle');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const circle = entry.target;
        const progress = circle.dataset.progress * 10;
        const ring = circle.querySelector('.progress-ring__circle');
        const circumference = 2 * Math.PI * 70; // For desktop
        ring.style.strokeDasharray = circumference;
        ring.style.strokeDashoffset = circumference - (progress / 100) * circumference;
      }
    });
  }, { threshold: 0.5 });
  
  circles.forEach(circle => observer.observe(circle));
  
  // Draggable Skill Button
  const tags = document.querySelectorAll('.tag');
  const cloud = document.querySelector('#cloud-tags');
  
  tags.forEach(tag => {
    tag.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', e.target.textContent);
      tag.classList.add('dragging');
    });
  
    tag.addEventListener('dragend', () => {
      tag.classList.remove('dragging');
    });
  
    tag.addEventListener('dragover', (e) => {
      e.preventDefault();
    });
  
    tag.addEventListener('drop', (e) => {
      e.preventDefault();
      const draggedText = e.dataTransfer.getData('text/plain');
      const draggedTag = Array.from(tags).find(t => t.textContent === draggedText);
      const dropTarget = e.target.closest('.tag');
      if (dropTarget && draggedTag !== dropTarget) {
        const allTags = Array.from(cloud.children);
        const draggedIndex = allTags.indexOf(draggedTag);
        const dropIndex = allTags.indexOf(dropTarget);
        if (draggedIndex < dropIndex) {
          cloud.insertBefore(draggedTag, dropTarget.nextSibling);
        } else {
          cloud.insertBefore(draggedTag, dropTarget);
        }
      }
    });
  });
  
  // Back to Top Button
  const backToTop = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });