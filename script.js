// NeonVault Gallery - Sophisticated Red-Black Theme Effects

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

// Preloader overlay
function initPreloader() {
  const preloader = document.createElement('div');
  preloader.id = 'preloader';
  preloader.innerHTML = `
    <div class="preloader-content">
      <div class="preloader-logo">⚡ NeonVault</div>
      <div class="preloader-bar">
        <span class="preloader-bar-fill"></span>
      </div>
      <div class="preloader-text">Preparing your gallery...</div>
    </div>
  `;
  document.body.appendChild(preloader);

  // Hide preloader on full load
  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('hide');
      setTimeout(() => preloader.remove(), 400);
    }, 400);
  });
}

// Add elegant loading effect
function addLoadingEffect() {
  const body = document.body;
  body.style.opacity = '0';
  body.style.transition = 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1)';
  
  setTimeout(() => {
    body.style.opacity = '1';
  }, 100);
}

// Add sophisticated hover effects
function addHoverEffects() {
  const interactiveElements = document.querySelectorAll('.card, .gallery-item, .btn');
  
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
      this.style.boxShadow = '0 20px 40px rgba(255, 0, 64, 0.3)';
    });
    
    element.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = '';
    });
  });
}

// Add smooth scroll reveal effect with staggered animation
function addScrollReveal() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('fade-in');
        }, index * 100); // Staggered animation
      }
    });
  }, observerOptions);
  
  const elements = document.querySelectorAll('.card, .gallery-item');
  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(el);
  });
}

// Add enhanced form interactions
function addFormInteractions() {
  const formInputs = document.querySelectorAll('input, textarea');
  
  formInputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement && (this.parentElement.style.transform = 'scale(1.02)');
      this.style.borderColor = '#cc0033';
      this.style.boxShadow = '0 0 20px rgba(255, 0, 64, 0.4)';
    });
    
    input.addEventListener('blur', function() {
      this.parentElement && (this.parentElement.style.transform = 'scale(1)');
      this.style.boxShadow = '';
    });
  });
}

// Add smooth page transitions
function addPageTransitions() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      const isHash = targetId && targetId.startsWith('#');
      if (!isHash) return;
      e.preventDefault();
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Add sophisticated image loading effects
function addImageEffects() {
  const images = document.querySelectorAll('img');
  
  images.forEach(img => {
    img.addEventListener('load', function() {
      this.style.opacity = '0';
      this.style.transform = 'scale(0.95)';
      this.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
      
      setTimeout(() => {
        this.style.opacity = '1';
        this.style.transform = 'scale(1)';
      }, 200);
    });
  });
}

// Add parallax effect to hero section
function addParallaxEffect() {
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      hero.style.transform = `translateY(${rate}px)`;
    });
  }
}

// Add floating animation to cards
function addFloatingAnimation() {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
    card.classList.add('floating-card');
  });
}

// Add gradient text animation
function addGradientAnimation() {
  const gradientTexts = document.querySelectorAll('.categories h2, .contact h2, .gallery-page h2');
  gradientTexts.forEach(text => {
    text.addEventListener('mouseenter', function() {
      this.style.backgroundSize = '200% 200%';
      this.style.animation = 'gradientShift 2s ease infinite';
    });
    
    text.addEventListener('mouseleave', function() {
      this.style.backgroundSize = '100% 100%';
      this.style.animation = 'none';
    });
  });
}

// Enable click-to-download on gallery items
function enableDownloadOnClick() {
  document.addEventListener('click', function(e) {
    const item = e.target.closest('.gallery-item');
    if (!item) return;

    if (e.target.closest('.download-btn')) return;

    const img = item.querySelector('img');
    if (!img || !img.src) return;

    const link = document.createElement('a');
    link.href = img.src;
    try {
      const url = new URL(img.src);
      const path = url.pathname.split('/').pop() || 'image.jpg';
      link.download = path;
    } catch (err) {
      link.download = 'image.jpg';
    }
    document.body.appendChild(link);
    link.click();
    link.remove();
  });
}

// Add ripple effect to buttons
function addRippleEffect() {
  const buttons = document.querySelectorAll('.btn, .contact button');
  
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
}

// Initialize all effects when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initPreloader();
  addLoadingEffect();
  addHoverEffects();
  addScrollReveal();
  addFormInteractions();
  addPageTransitions();
  addImageEffects();
  addParallaxEffect();
  addFloatingAnimation();
  addGradientAnimation();
  addRippleEffect();
  enableDownloadOnClick();
});

// Add enhanced CSS for sophisticated effects
const style = document.createElement('style');
style.textContent = `
  /* Preloader */
  #preloader {
    position: fixed;
    inset: 0;
    background: linear-gradient(135deg, #0a0a0a, #1a0f0f);
    display: grid;
    place-items: center;
    z-index: 2000;
    transition: opacity 0.4s ease;
  }
  #preloader.hide { opacity: 0; pointer-events: none; }
  .preloader-content { text-align: center; padding: 20px 30px; }
  .preloader-logo {
    font-weight: 800;
    letter-spacing: 2px;
    margin-bottom: 16px;
    background: linear-gradient(135deg, #ff0040, #cc0033, #ff4080);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 24px;
  }
  .preloader-bar {
    width: 320px; max-width: 70vw; height: 6px; border-radius: 10px;
    background: rgba(255,255,255,0.08);
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.12);
    margin: 0 auto 12px;
  }
  .preloader-bar-fill {
    display: block; height: 100%; width: 40%; border-radius: 10px;
    background: linear-gradient(90deg, #ff0040, #cc0033, #ff4080);
    animation: preloader-slide 1.2s ease-in-out infinite;
  }
  .preloader-text { color: rgba(255,255,255,0.7); font-size: 14px; }
  @keyframes preloader-slide { 0%{ transform: translateX(-100%);} 50%{ transform: translateX(10%);} 100%{ transform: translateX(120%);} }

  .fade-in { opacity: 1 !important; transform: translateY(0) !important; }
  
  .floating-card { animation: float 6s ease-in-out infinite; }
  @keyframes float { 0%, 100% { transform: translateY(0px);} 50% { transform: translateY(-10px);} }
  
  .ripple { position: absolute; border-radius: 50%; background: rgba(255, 0, 64, 0.35); transform: scale(0); animation: ripple-animation 0.6s linear; pointer-events: none; }
  @keyframes ripple-animation { to { transform: scale(4); opacity: 0; } }
  
  .card, .gallery-item { transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
  .btn { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); position: relative; overflow: hidden; }
  input, textarea { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
  .navbar { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
  * { transition-property: transform, box-shadow, border-color, background-color; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }
`;
document.head.appendChild(style);
