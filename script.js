window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('loaded');
  
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

// Mobile sub-menu toggle handler 
if (mobileSubmenuTrigger && nestedDropdownLI) {
  mobileSubmenuTrigger.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault(); // Stop default hyperlink redirection
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
      
      // Close open UI layouts smoothly before running out-fades
      if (menuToggle) menuToggle.classList.remove('active');
      if (dropdownMenu) dropdownMenu.classList.remove('mobile-open');

      document.body.classList.add('exiting');
      setTimeout(() => {
        window.location.href = destination;
      }, 250); // Exact window sync running alongside curtain out-fade transition timings
    }
  });
});
