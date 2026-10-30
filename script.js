window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
  
  // 🛡️ DEFENSIVE MENU CLEANER ENGINE
  // Automatically finds and purges old unlinked links if an old HTML version loads
  document.querySelectorAll('.dropdown-menu li, .sub-menu li').forEach(item => {
    const link = item.querySelector('a');
    if (link) {
      const path = link.getAttribute('href');
      // If the link points to about.html or team.html, delete it from the DOM instantly
      if (path === 'about.html' || path === 'team.html') {
        item.remove();
      }
    }
  });

  // Device checks to handle layout adjustments inside mobile drawer arrays
  if (window.innerWidth <= 768) {
    const mobileHome = document.querySelector('.mobile-only-home');
    if (mobileHome) mobileHome.style.display = 'block';
  }
});

// Mobile Navigation Element Selectors
const menuToggle = document.querySelector('.menu-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');
const mobileSubmenuTrigger = document.querySelector('.mobile-submenu-trigger');
const nestedDropdownLI = document.querySelector('.nested-dropdown');

// Main hamburger navigation menu toggling triggers
if (menuToggle && dropdownMenu) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    dropdownMenu.classList.toggle('mobile-open');
  });
}

// Mobile sub-menu accordion link patch logic (Safely wrapped)
if (mobileSubmenuTrigger && nestedDropdownLI) {
  mobileSubmenuTrigger.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault(); // Stop default hyperlink navigation sequence
      nestedDropdownLI.classList.toggle('submenu-open');
    }
  });
}

// Dynamic Outbound Page Glitch Interceptor Transition Engines
document.querySelectorAll('.transition-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const destination = this.getAttribute('href');
    
    // Safety exit conditions
    if (destination && destination !== '#' && !destination.includes(window.location.pathname)) {
      e.preventDefault();
      
      // Close open layout windows smoothly before execution loop shifts
      if (menuToggle) menuToggle.classList.remove('active');
      if (dropdownMenu) dropdownMenu.classList.remove('mobile-open');

      document.body.classList.add('exiting');
      setTimeout(() => {
        window.location.href = destination;
      }, 250); // Curtain out-fade layout synchronization window timer
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const lightboxOverlay = document.getElementById("lightbox-overlay");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxClose = document.querySelector(".lightbox-close");
  const triggers = document.querySelectorAll(".lightbox-trigger");

  // Open Lightbox Event Pipeline
  triggers.forEach(trigger => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault(); // Blocks the link from running a normal page jump
      const imageSrc = trigger.getAttribute("href");
      
      lightboxImg.setAttribute("src", imageSrc);
      lightboxOverlay.classList.add("active");
    });
  });

  // Close Lightbox Callback Logic
  const closeLightbox = () => {
    lightboxOverlay.classList.remove("active");
    setTimeout(() => {
      lightboxImg.setAttribute("src", ""); // Empties src to release active system memory
    }, 400);
  };

  lightboxClose.addEventListener("click", closeLightbox);
  
  // Close seamlessly if user clicks out on the dark background mask wrapper
  lightboxOverlay.addEventListener("click", (e) => {
    if (e.target === lightboxOverlay) {
      closeLightbox();
    }
  });
});

