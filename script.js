/* Responsive navigation */
const phoneMenu = document.querySelector(".phone-menu");
const nav = document.querySelector(".nav__list");

phoneMenu.addEventListener("click", () => {
  nav.classList.toggle("nav__list--responsive");
});

document.addEventListener("click", (e) => {
  if (e.target !== phoneMenu) {
    nav.classList.remove("nav__list--responsive");
  }
});
/* End of responsive navigation */
//  Smooth scrolling
const links = [...document.querySelectorAll("a")];

links.forEach((link) =>
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const hash = e.target.getAttribute("href");

    if (hash === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",

      });
    }
  })
);
// End of smooth scrolling

/* Testimonial silder */
const slider = function (time = null) {
  const slides = document.querySelectorAll(".slide");
  slides.forEach(
    (slide, i) => (slide.style.transform = `translateX(${100 * i}%)`)
  );
  let activeSlide = document.querySelector(".feedback-box--active").dataset.index;
  // console.log(activeSlide);
  
  let currentSlide = 0;
  const maxSlides = slides.length - 1;
  const btnSliderLeft = document.querySelector(".feedback-button--left");
  const btnSliderRight = document.querySelector(".feedback-button--right");
  // const dotContainer = document.querySelector(".dots");

  // const createDots = function () {
  //   slides.forEach(function (_, i) {
  //     dotContainer.insertAdjacentHTML(
  //       "beforeend",
  //       `<button class="dots__dot" data-slide="${i}"></button>`
  //     );
  //   });
  // };
  // const activateDot = function (slide) {
  //   document
  //     .querySelectorAll(".dots__dot")
  //     .forEach((dot) => dot.classList.remove("dots__dot--active"));
  //   document
  //     .querySelector(`.dots__dot[data-slide="${slide}"]`)
  //     .classList.add("dots__dot--active");
  // };


  const buttonsActive = function () {
    if(+activeSlide > 2 && +activeSlide < Array.from(document.querySelectorAll(".feedback-box")).length){
      btnSliderRight.classList.add('feedback-button--active');
      btnSliderLeft.classList.add('feedback-button--active');
      console.log(activeSlide+"> 2 and less than 7");
    }
    if(+activeSlide > 2 && +activeSlide === Array.from(document.querySelectorAll(".feedback-box")).length){
      btnSliderRight.classList.add('feedback-button--active');
      btnSliderLeft.classList.remove('feedback-button--active');
      console.log(activeSlide+"> 2 and < 7");
    }

    if(+activeSlide >= 3){
      btnSliderRight.classList.add('feedback-button--active');
      btnSliderLeft.classList.add('feedback-button--active');
      console.log(activeSlide+"greater than or equal 3");
    }
    if(+activeSlide == 2){
      btnSliderLeft.classList.remove('feedback-button--active');
    }
    if(+activeSlide >= Array.from(document.querySelectorAll(".feedback-box")).length){
      btnSliderRight.classList.remove('feedback-button--active');
      btnSliderLeft.classList.add('feedback-button--active');
      console.log(activeSlide+"greater or equal 7");
    }
  }
  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  };
  const nextSlide = function () {
    if (currentSlide === maxSlides) {
      currentSlide = 0;
    } else {
      currentSlide++;
      if (+activeSlide <= Array.from(document.querySelectorAll(".feedback-box")).length) {
        if(+activeSlide === Array.from(document.querySelectorAll(".feedback-box")).length){
          activeSlide = 1;
        }
        Array.from(document.querySelectorAll('.feedback-box--active')).forEach(el => el.classList.remove('feedback-box--active'))
        document.querySelector(`.feedback-box[data-index="${Number(activeSlide)+1}"]`).classList.add('feedback-box--active');
        activeSlide = +document.querySelector(".feedback-box--active").dataset.index;  
        buttonsActive();
        if(window.innerWidth < 900){
          Array.from(document.querySelectorAll('.feedback-box')).forEach(el => el.classList.add('feedback-box--active'))
        }
      }
    }
    goToSlide(currentSlide);
    // activateDot(currentSlide);
  };
  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxSlides;
    } else {
      currentSlide--;
      if (+activeSlide <= Array.from(document.querySelectorAll(".feedback-box")).length) {
        if(+activeSlide === 1){

          activeSlide = Array.from(document.querySelectorAll(".feedback-box")).length;
        }
        Array.from(document.querySelectorAll('.feedback-box--active')).forEach(el => el.classList.remove('feedback-box--active'))

        document.querySelector(`.feedback-box[data-index="${Number(activeSlide)-1}"]`).classList.add('feedback-box--active');
        activeSlide = +document.querySelector(".feedback-box--active").dataset.index;    

        buttonsActive();
        if(window.innerWidth < 900){
          Array.from(document.querySelectorAll('.feedback-box')).forEach(el => el.classList.add('feedback-box--active'))
        }
      }
    }
    goToSlide(currentSlide);
    // activateDot(currentSlide);
  };
  const init = function () {
    // createDots();
    goToSlide(0);
    // activateDot(0);
  };
  init();
  btnSliderRight.addEventListener("click", nextSlide);
  btnSliderLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    e.key === "ArrowRight" && nextSlide();
    e.key === "ArrowLeft" && prevSlide();
  });

  // dotContainer.addEventListener("click", function (e) {
  //   if (e.target.classList.contains("dots__dot")) {
  //     // const slide = e.target.dataset.slide;
  //     const { slide } = e.target.dataset; // destracure as an object
  //     console.log(slide);
  //     goToSlide(slide);
  //     activateDot(slide);
  //     // e.target.classList.add('dots__dot--active');
  //     // console.log(e.target);
  //   }
  // });
  setInterval(() => {
    if(time)
    nextSlide();
  }, time);
};
slider();
// console.log(window.innerWidth <900);

