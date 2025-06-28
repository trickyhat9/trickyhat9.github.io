document.getElementById("navbar").innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="byte3.png" alt="Logo" style="height: 30px; margin-right: 10px;">
        Byte Web Design
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="/services.html" target="_blank">Services</a></li>
          <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>
`;

 document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');
    if (hero) {
      hero.style.opacity = 0;
      hero.style.transition = 'opacity 1.2s ease-out';
      setTimeout(() => {
        hero.style.opacity = 1;
      }, 100);
    }

 

    // Smooth scale on hover for service cards
    const cards = document.querySelectorAll('#services .col-md-4');
    cards.forEach(card => {
      card.style.transition = 'transform 0.3s ease';
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
      });
    });

    const cards2 = document.querySelectorAll('#about .col-md-4');
    cards2.forEach(card => {
      card.style.transition = 'transform 0.3s ease';
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
      });
    });

    // Subtle glow on focus for contact inputs
    const inputs = document.querySelectorAll('#contact input, #contact textarea');
    inputs.forEach(input => {
      input.addEventListener('focus', () => {
        input.style.boxShadow = '0 0 0 0.15rem rgba(13,110,253,.25)';
      });
      input.addEventListener('blur', () => {
        input.style.boxShadow = 'none';
      });
    });
  });

