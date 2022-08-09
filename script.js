var bt = document.querySelector(".btPrev");

var bt2 = document.querySelector(".btNex");

let time = 3000;
(currentImageIndex = 0), (images = document.querySelectorAll("#slider img"));
max = images.length;
min = images[0];

console.log(min);
bt.addEventListener("click", () => {
  backImage();
});
bt2.addEventListener("click", () => {
  nextImage();
});

const nextImage = () => {
  images[currentImageIndex].classList.remove("selected");

  currentImageIndex++;

  if (currentImageIndex >= max) currentImageIndex = 0;

  images[currentImageIndex].classList.add("selected");
};

const backImage = () => {
  images[currentImageIndex].classList.remove("selected");

  currentImageIndex--;

  if (Math.sign(currentImageIndex) == -1) currentImageIndex = 4;

  images[currentImageIndex].classList.add("selected");
};
const start = () => {
  setInterval(() => {
    nextImage();
  }, time);
};
window.addEventListener("load", start);
