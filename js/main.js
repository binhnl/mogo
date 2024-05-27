$(document).ready(function () {
  AOS.init();

  $(".banner-list").slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    fadeSpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".banner-nav-list",
  });

  $(".banner-nav-list").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".banner-list",
    dots: true,
    centerMode: true,
    focusOnSelect: true,
  });

  $(".quote-list").slick({
    infinite: true,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    fadeSpeed: 1000,
    prevArrow:
      '<span class="slick-prev"><i class="fa-solid fa-chevron-right"></i></span>',
    nextArrow:
      '<span class="slick-next"><i class="fa-solid fa-chevron-left"></i></span>',
  });

  window.addEventListener("scroll", function () {
    let header = document.getElementById("header");
    if (window.pageYOffset > 0 && window.innerWidth > 767) {
      header.classList.add("header--permanent");
    } else {
      header.classList.remove("header--permanent");
    }
  });

  let toogleNavMobile = document.getElementById("header__icon");
  toogleNavMobile.addEventListener("click", function () {
    let navMobile = document.querySelector(".header-menu-list");
    navMobile.classList.toggle("menu-mobile--show");
  });

  let accordionHeader = document.querySelectorAll(
    ".service-design-accordion-smooth__header"
  );
  let accordionPanel = document.querySelectorAll(
    ".service-design-accordion-smooth__panel"
  );

  accordionHeader.forEach((header) => {
    header.addEventListener("click", function () {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      panel.style.display = panel.style.display === "block" ? "none" : "block";

      accordionPanel.forEach((otherPanel) => {
        if (otherPanel !== panel) {
          otherPanel.style.display = "none";
        }
      });

      accordionHeader.forEach((otherHeader) => {
        if (otherHeader !== this) {
          otherHeader.classList.remove("active");
        }
      });
    });
  });

  let factsNumber = document.querySelectorAll(".facts-list-item__number");
  factsNumber.forEach(function (item) {
    let target = parseInt(item.getAttribute("data-target"));
    let duration = 5000;

    countUp(item, target, duration);
  });

  function countUp(element, target, duration) {
    let start = 0;
    let end = target;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / (end - start)));

    let timer = setInterval(function () {
      start += increment;
      element.textContent = start;
      if (start === end) {
        clearInterval(timer);
      }
    }, stepTime);
  }
});
