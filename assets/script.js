(function() {
  'use strict';

  const qs = (sel, scope = document) => scope.querySelector(sel);
  const qsa = (sel, scope = document) => Array.from(scope.querySelectorAll(sel));

  function initMobileNav() {
    const toggle = qs('.mobile-toggle');
    const menu = qs('.mobile-menu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', (!expanded).toString());
      menu.classList.toggle('active');
    });
  }

  function initMarquees() {
    qsa('[data-marquee]').forEach(track => {
      const speed = Number(track.dataset.speed || 18);
      track.style.animationDuration = `${speed}s`;
    });
  }

  function initProductBadges() {
    const timer = qs('[data-timer]');
    if (timer) {
      let remaining = Number(timer.dataset.timer || 900);
      const tick = () => {
        if (remaining <= 0) return;
        remaining -= 1;
        const minutes = String(Math.floor(remaining / 60)).padStart(2, '0');
        const seconds = String(remaining % 60).padStart(2, '0');
        timer.querySelector('[data-minutes]').textContent = minutes;
        timer.querySelector('[data-seconds]').textContent = seconds;
        requestAnimationFrame(() => setTimeout(tick, 1000));
      };
      tick();
    }
  }

  function initProductGallery() {
    qsa('.product-gallery').forEach(gallery => {
      const mainImage = qs('.product-main-media img', gallery);
      const thumbs = qsa('.product-thumb img', gallery);
      if (!mainImage || !thumbs.length) return;

      const setActive = (activeIndex) => {
        thumbs.forEach((thumb, idx) => {
          thumb.parentElement.classList.toggle('is-active', idx === activeIndex);
        });
      };

      thumbs.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
          mainImage.src = thumb.src.replace(/width=\d+/, 'width=1000');
          mainImage.alt = thumb.alt;
          setActive(index);
        });
        thumb.addEventListener('keyup', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            thumb.click();
          }
        });
        thumb.parentElement.setAttribute('role', 'button');
        thumb.parentElement.setAttribute('tabindex', '0');
      });

      setActive(0);
    });
  }

  function initCarousels() {
    qsa('[data-slider]').forEach(slider => {
      const track = qs('[data-slider-track]', slider);
      const prev = qs('[data-slider-prev]', slider);
      const next = qs('[data-slider-next]', slider);
      if (!track) return;
      const slides = qsa('[data-slide]', track);
      let index = 0;

      const update = () => {
        if (!slides.length) return;
        const offset = -(index * (slides[0].offsetWidth + 14));
        track.style.transform = `translateX(${offset}px)`;
      };

      next?.addEventListener('click', () => {
        index = Math.min(index + 1, Math.max(0, slides.length - 1));
        update();
      });

      prev?.addEventListener('click', () => {
        index = Math.max(index - 1, 0);
        update();
      });

      window.addEventListener('resize', update);
      update();
    });
  }

  function initVariants() {
    qsa('[id^="ProductForm"]').forEach(form => {
      const variantInput = qs('[data-variant-id]', form);
      const variantData = form.dataset.variants ? JSON.parse(form.dataset.variants) : [];
      const optionSelects = qsa('select[data-option-index]', form);
      if (!variantInput || !variantData.length || !optionSelects.length) return;

      const updateVariant = () => {
        const selected = optionSelects.map(select => select.value);
        const match = variantData.find(v => JSON.stringify(v.options) === JSON.stringify(selected));
        if (match) {
          variantInput.value = match.id;
        }
      };

      optionSelects.forEach(select => select.addEventListener('change', updateVariant));
      updateVariant();
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initMobileNav();
    initMarquees();
    initProductBadges();
    initCarousels();
    initVariants();
    initProductGallery();
  });
})();
