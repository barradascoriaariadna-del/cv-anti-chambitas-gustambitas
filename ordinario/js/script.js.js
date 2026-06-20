
document.addEventListener('DOMContentLoaded', function() {
  const playBtn = document.getElementById('playMusicBtn');
  const audio = document.getElementById('backgroundMusic');
  const status = document.getElementById('musicaStatus');
  
  if (playBtn && audio) {
    playBtn.addEventListener('click', function() {
      audio.play()
        .then(() => {
          this.innerHTML = '<i class="fas fa-music me-2"></i>🎵 Reproduciendo...';
          this.disabled = true;
          this.style.opacity = '0.6';
          if (status) {
            status.style.display = 'block';
          }
        })
        .catch(error => {
          alert('⚠️ No se pudo reproducir la música.');
        });
    });
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});


document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("⚠️ Por favor completa todos los campos.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("📧 Por favor ingresa un correo electrónico válido.");
    return;
  }

  alert("¡Gracias por tu mensaje, " + name + "! 🎉\nPronto me pondré en contacto contigo.");
  this.reset();
});