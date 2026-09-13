/* =========================================
   MOBILE MENU
========================================= */

const nav = document.querySelector(".nav");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("mobile-open");
});


document.querySelectorAll(".nav nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("mobile-open");
  });
});


/* =========================================
   BUNNY CURSOR
========================================= */

const bunny = document.querySelector(".cursor-bunny");

let mouseX = 0;
let mouseY = 0;

let bunnyX = 0;
let bunnyY = 0;

document.addEventListener("mousemove", event => {
  mouseX = event.clientX;
  mouseY = event.clientY;
});

function moveBunny() {

  bunnyX += (mouseX - bunnyX) * 0.16;
  bunnyY += (mouseY - bunnyY) * 0.16;

  bunny.style.left = bunnyX + "px";
  bunny.style.top = bunnyY + "px";

  requestAnimationFrame(moveBunny);
}

moveBunny();


/* =========================================
   REVEAL ON SCROLL
========================================= */

const revealElements =
  document.querySelectorAll(".reveal");

const revealObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("show");

          revealObserver.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.12
    }
  );


revealElements.forEach(element => {
  revealObserver.observe(element);
});


/* =========================================
   PRODUCT 3D TILT
========================================= */

const cards =
  document.querySelectorAll(".product-card");

if (window.matchMedia("(pointer:fine)").matches) {

  cards.forEach(card => {

    card.addEventListener("mousemove", event => {

      const rect =
        card.getBoundingClientRect();

      const x =
        event.clientX - rect.left;

      const y =
        event.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX =
        ((y - centerY) / centerY) * -3;

      const rotateY =
        ((x - centerX) / centerX) * 3;

      card.style.transform =
        `perspective(900px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateY(-4px)`;

    });


    card.addEventListener("mouseleave", () => {

      card.style.transform =
        "perspective(900px) rotateX(0) rotateY(0)";

    });

  });

}


/* =========================================
   HERO PARALLAX
========================================= */

const heroProduct =
  document.querySelector(".hero-product");

document.addEventListener("mousemove", event => {

  if (!heroProduct) return;

  if (!window.matchMedia("(pointer:fine)").matches)
    return;

  const x =
    (event.clientX / window.innerWidth - .5) * 10;

  const y =
    (event.clientY / window.innerHeight - .5) * 10;

  heroProduct.style.transform =
    `translate(${x}px, ${y}px)`;

});


/* =========================================
   BUTTON MAGNET EFFECT
========================================= */

const buttons =
  document.querySelectorAll(".button, .nav-order, .instagram-button");

if (window.matchMedia("(pointer:fine)").matches) {

  buttons.forEach(button => {

    button.addEventListener("mousemove", event => {

      const rect =
        button.getBoundingClientRect();

      const x =
        event.clientX - rect.left - rect.width / 2;

      const y =
        event.clientY - rect.top - rect.height / 2;

      button.style.transform =
        `translate(${x * .08}px, ${y * .08}px)`;

    });

    button.addEventListener("mouseleave", () => {

      button.style.transform =
        "translate(0,0)";

    });

  });

}


/* =========================================
   SMOOTH PRODUCT IMAGE LOADING
========================================= */

document.querySelectorAll("img").forEach(img => {

  img.addEventListener("load", () => {
    img.classList.add("loaded");
  });

});


/* =========================================
   REDUCED MOTION
========================================= */

if (
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches
) {

  document.documentElement.style.scrollBehavior = "auto";

  document.querySelectorAll(".reveal").forEach(el => {
    el.style.transition = "none";
    el.style.opacity = "1";
    el.style.transform = "none";
  });

}
