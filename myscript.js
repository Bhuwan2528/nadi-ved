document.addEventListener("DOMContentLoaded", function () {

  /* ======================
     NAVIGATION SAFE SETUP
  ====================== */

  const hamburger = document.getElementById("phHamburger");
  const nav = document.getElementById("phNav");
  const dropdown = document.getElementById("phDropdown");
  const dropBtn = document.getElementById("phDropBtn");

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }

  if (dropBtn && dropdown) {
    dropBtn.addEventListener("click", (e) => {
      if (window.innerWidth <= 900) {
        e.preventDefault();
        dropdown.classList.toggle("active");
      }
    });
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900 && nav && dropdown) {
      nav.classList.remove("open");
      dropdown.classList.remove("active");
    }
  });

  /* ======================
     SCROLL ANIMATION
  ====================== */

  const cards = document.querySelectorAll(".facility-card");

  if (cards.length > 0) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transform = "translateY(0)";
          entry.target.style.opacity = "1";
        }
      });
    }, { threshold: 0.2 });

    cards.forEach(card => {
      card.style.opacity = "0";
      card.style.transform = "translateY(40px)";
      observer.observe(card);
    });
  }

  /* ======================
     MODAL SAFE
  ====================== */

  const openBtn = document.querySelector(".btn-primary");
  const modal = document.getElementById("admissionModal");
  const closeBtn = document.getElementById("closeModal");

  if (openBtn && modal && closeBtn) {
    openBtn.addEventListener("click", function (e) {
      e.preventDefault();
      modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });

    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }

  /* ======================
     HERO SLIDER SAFE
  ====================== */

  const phHero = document.querySelector(".ph-hero-slider");

  if (phHero) {
    const phSlides = phHero.querySelectorAll(".ph-hero-slide");

    if (phSlides.length > 0) {

      let phIndex = 0;
      const total = phSlides.length;

      setInterval(function () {

        phSlides[phIndex].classList.remove("active");

        phIndex = (phIndex + 1) % total;

        phSlides[phIndex].classList.add("active");

      }, 4000);

    }
  }

});
