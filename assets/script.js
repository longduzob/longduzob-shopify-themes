/**
 * Wilderness Expedition Theme
 * JavaScript functionality
 */

(function() {
  'use strict';

  // === Mobile Menu Toggle ===
  function initMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const body = document.body;

    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        body.classList.toggle('menu-open');
        
        // Update aria-expanded
        const isExpanded = mobileMenu.classList.contains('active');
        menuToggle.setAttribute('aria-expanded', isExpanded);
      });

      // Close menu when clicking outside
      document.addEventListener('click', function(e) {
        if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
          mobileMenu.classList.remove('active');
          body.classList.remove('menu-open');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      });
    }
  }

  // === Product Carousel ===
  function initCarousel() {
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach(carousel => {
      const track = carousel.querySelector('.carousel-track');
      const slides = Array.from(track.children);
      const prevBtn = carousel.querySelector('.carousel-btn--prev');
      const nextBtn = carousel.querySelector('.carousel-btn--next');
      const dotsNav = carousel.querySelector('.carousel-dots');
      
      if (!track || slides.length === 0) return;

      const slideWidth = slides[0].getBoundingClientRect().width;
      let currentIndex = 0;

      // Arrange slides
      slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + 'px';
      });

      // Move to slide
      const moveToSlide = (targetIndex) => {
        track.style.transform = `translateX(-${slideWidth * targetIndex}px)`;
        currentIndex = targetIndex;
        
        // Update dots
        if (dotsNav) {
          const dots = dotsNav.querySelectorAll('.carousel-dot');
          dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === targetIndex);
          });
        }
      };

      // Next button
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          const nextIndex = (currentIndex + 1) % slides.length;
          moveToSlide(nextIndex);
        });
      }

      // Previous button
      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
          moveToSlide(prevIndex);
        });
      }

      // Dots navigation
      if (dotsNav) {
        const dots = dotsNav.querySelectorAll('.carousel-dot');
        dots.forEach((dot, index) => {
          dot.addEventListener('click', () => {
            moveToSlide(index);
          });
        });
      }

      // Auto-play
      let autoplayInterval;
      const startAutoplay = () => {
        autoplayInterval = setInterval(() => {
          const nextIndex = (currentIndex + 1) % slides.length;
          moveToSlide(nextIndex);
        }, 5000);
      };

      const stopAutoplay = () => {
        clearInterval(autoplayInterval);
      };

      carousel.addEventListener('mouseenter', stopAutoplay);
      carousel.addEventListener('mouseleave', startAutoplay);
      
      startAutoplay();
    });
  }

  // === Sticky Header ===
  function initStickyHeader() {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScrollTop = 0;
    const headerHeight = header.offsetHeight;

    window.addEventListener('scroll', function() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > headerHeight) {
        header.classList.add('header--sticky');
        
        if (scrollTop > lastScrollTop) {
          // Scrolling down
          header.classList.add('header--hidden');
        } else {
          // Scrolling up
          header.classList.remove('header--hidden');
        }
      } else {
        header.classList.remove('header--sticky', 'header--hidden');
      }

      lastScrollTop = scrollTop;
    });
  }

  // === Search Toggle ===
  function initSearch() {
    const searchToggle = document.querySelector('.search-toggle');
    const searchForm = document.querySelector('.search-form');
    const searchClose = document.querySelector('.search-close');

    if (searchToggle && searchForm) {
      searchToggle.addEventListener('click', function(e) {
        e.preventDefault();
        searchForm.classList.add('active');
        searchForm.querySelector('input').focus();
      });

      if (searchClose) {
        searchClose.addEventListener('click', function() {
          searchForm.classList.remove('active');
        });
      }

      // Close on escape
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchForm.classList.contains('active')) {
          searchForm.classList.remove('active');
        }
      });
    }
  }

  // === Quantity Selector ===
  function initQuantitySelector() {
    const quantitySelectors = document.querySelectorAll('.quantity-selector');

    quantitySelectors.forEach(selector => {
      const input = selector.querySelector('.quantity-input');
      const decreaseBtn = selector.querySelector('.quantity-decrease');
      const increaseBtn = selector.querySelector('.quantity-increase');

      if (!input) return;

      if (decreaseBtn) {
        decreaseBtn.addEventListener('click', function() {
          const currentValue = parseInt(input.value) || 1;
          if (currentValue > 1) {
            input.value = currentValue - 1;
            input.dispatchEvent(new Event('change'));
          }
        });
      }

      if (increaseBtn) {
        increaseBtn.addEventListener('click', function() {
          const currentValue = parseInt(input.value) || 1;
          const maxValue = parseInt(input.max) || 999;
          if (currentValue < maxValue) {
            input.value = currentValue + 1;
            input.dispatchEvent(new Event('change'));
          }
        });
      }
    });
  }

  // === Newsletter Form ===
  function initNewsletterForm() {
    const forms = document.querySelectorAll('.newsletter-form');

    forms.forEach(form => {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = form.querySelector('input[type="email"]').value;
        const submitBtn = form.querySelector('button[type="submit"]');
        const messageEl = form.querySelector('.form-message');

        if (!email) {
          showMessage(messageEl, 'Veuillez entrer une adresse email valide.', 'error');
          return;
        }

        // Disable button during submission
        submitBtn.disabled = true;
        submitBtn.textContent = 'Inscription...';

        // Simulate form submission (replace with actual Shopify form handling)
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.textContent = "S'inscrire";
          showMessage(messageEl, 'Merci de votre inscription !', 'success');
          form.reset();
        }, 1000);
      });
    });
  }

  function showMessage(element, message, type) {
    if (!element) return;
    
    element.textContent = message;
    element.className = `form-message form-message--${type}`;
    element.style.display = 'block';

    setTimeout(() => {
      element.style.display = 'none';
    }, 5000);
  }

  // === Scroll Animations ===
  function initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
  }

  // === Image Lazy Loading ===
  function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }

  // === Cart Drawer ===
  function initCartDrawer() {
    const cartToggle = document.querySelectorAll('.cart-toggle');
    const cartDrawer = document.querySelector('.cart-drawer');
    const cartClose = document.querySelector('.cart-drawer-close');
    const cartOverlay = document.querySelector('.cart-drawer-overlay');

    const openCart = () => {
      if (cartDrawer) {
        cartDrawer.classList.add('active');
        document.body.classList.add('cart-open');
      }
    };

    const closeCart = () => {
      if (cartDrawer) {
        cartDrawer.classList.remove('active');
        document.body.classList.remove('cart-open');
      }
    };

    cartToggle.forEach(toggle => {
      toggle.addEventListener('click', function(e) {
        e.preventDefault();
        openCart();
      });
    });

    if (cartClose) {
      cartClose.addEventListener('click', closeCart);
    }

    if (cartOverlay) {
      cartOverlay.addEventListener('click', closeCart);
    }

    // Close on escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && cartDrawer && cartDrawer.classList.contains('active')) {
        closeCart();
      }
    });
  }

  // === Initialize on DOM Ready ===
  function init() {
    initMobileMenu();
    initCarousel();
    initStickyHeader();
    initSearch();
    initQuantitySelector();
    initNewsletterForm();
    initScrollAnimations();
    initLazyLoading();
    initCartDrawer();
  }

  // Run init when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
