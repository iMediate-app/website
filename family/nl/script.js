// MOBILE MENU TOGGLE
const toggleBtn = document.querySelector('.menu-toggle');
const menuList = document.querySelector('.menu-list');
toggleBtn.addEventListener('click', () => {
  menuList.classList.toggle('open');
});

//  MENU DROPDOWN
    document.querySelectorAll('.submenu-toggle').forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.toggle('active');
            const submenu = this.nextElementSibling;
            submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
        });
    });

// OVERLAY + HERO BUTTONS FADE (MOBILE OR DESKTOP)
const overlay = document.querySelector('.overlay');
const heroItems = document.querySelectorAll('.hero-item');

// Detect if the device supports touch
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (isTouchDevice) {
  // 👇 Mobile/tablet: use tap-based logic
  let overlayActive = false;

  function resetFadeOuts() {
    overlay.classList.remove('fade-out');
    document.querySelectorAll('.hero-buttons.fade-out').forEach(button => {
      button.classList.remove('fade-out');
    });
    overlayActive = false;
  }

  heroItems.forEach(item => {
    const button = item.querySelector('.hero-buttons');

    item.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      resetFadeOuts();
      overlay.classList.add('fade-out');
      button?.classList.add('fade-out');
      overlayActive = true;
    });
  });

  document.addEventListener('pointerdown', () => {
    if (overlayActive) {
      resetFadeOuts();
    }
  });

} else {
  // 👇 Desktop: use hover-based logic
  heroItems.forEach(item => {
    const button = item.querySelector('.hero-buttons');

    item.addEventListener('mouseenter', () => {
      overlay.classList.add('fade-out');
      button?.classList.add('fade-out');
    });

    item.addEventListener('mouseleave', () => {
      overlay.classList.remove('fade-out');
      button?.classList.remove('fade-out');
    });
  });
}

// ABOUT SECTION SLIDE-IN
const aboutText = document.querySelector('.about-text');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

observer.observe(aboutText);

// Check for sessionStorage to prevent repeat
if (!sessionStorage.getItem('localePopupDismissed')) {
  fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
      if (data.country === 'NL') {
        const popup = document.getElementById('locale-popup');
        popup.classList.remove('hidden');

        document.getElementById('switch-dutch').addEventListener('click', () => {
          window.location.href = 'https://imediate-app.github.io/website/nl.html'; // replace with actual Dutch site URL
        });

        document.getElementById('dismiss-popup').addEventListener('click', () => {
          popup.classList.add('hidden');
          sessionStorage.setItem('localePopupDismissed', 'true');
        });
      }
    })
    .catch(error => {
      console.error('Geolocation check failed:', error);
    });
}

// Callout hero 
 document.addEventListener("DOMContentLoaded", function() {
      const closeButton = document.querySelector(".close-callout");
      const callout = document.getElementById("nanny-callout");

      if (closeButton && callout) {
        closeButton.addEventListener("click", function() {
          callout.style.opacity = "0";
          setTimeout(() => {
            callout.style.display = "none";
          }, 300);
        });
      }
    });

// Auto-fill the current year
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });


  // Initialize AOS (Animate On Scroll)
AOS.init({
  once: true,
  duration: 600
});
