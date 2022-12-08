const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
const body = document.querySelector("body");

nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});

body.addEventListener("keydown", (e) => {
  const slideWidth = slide.clientWidth;
  if (e.key === "ArrowRight") {
    slidesContainer.scrollLeft += slideWidth;
  } else if (e.key === "ArrowLeft") {
    slidesContainer.scrollLeft -= slideWidth;
  }
});
