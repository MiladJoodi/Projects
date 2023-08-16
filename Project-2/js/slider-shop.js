const buttons = document.querySelectorAll("[data-slide-direction]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.slideDirection === "next" ? 1 : -1;
    changeSlide(offset);
  });
});

const changeSlide = (offset) => {
  const slides = document.querySelector(".slides");
  const activeSlide = slides.querySelector("[data-active-slide]");
  let newIndex = [...slides.children].indexOf(activeSlide) + offset;
  newIndex =
    newIndex < 0
      ? slides.children.length - 1
      : newIndex === slides.children.length
      ? 0
      : newIndex;
  slides.children[newIndex].dataset.activeSlide = true;
  delete activeSlide.dataset.activeSlide;

  const circles = document.querySelector(".slides-circles");
  const activeCircle = circles.querySelector("[data-active-slide]");
  circles.children[newIndex].dataset.activeSlide = true;
  delete activeCircle.dataset.activeSlide;
};

setInterval(changeSlide.bind(null, 1), 6000);