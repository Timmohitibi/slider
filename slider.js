const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const prevBtn = document.querySelector(".left");
const nextBtn = document.querySelector(".right");
const dots = document.querySelectorAll(".button");

let currentIndex = 0;
const totalImages = images.length;

function updateSlider() {
  slider.style.transform = `translateX(${-currentIndex * 800}px)`;
  updateDots();
}

function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalImages;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateSlider();
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateSlider();
  });
});

// Initialize the slider
updateSlider();
