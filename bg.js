const body = document.querySelector("body");

const IMG_NUMBER = 3;
const current_width = window.innerWidth;
const current_height = window.innerHeight;

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number + 1;
}

function init() {
  const image = new Image();
  const img_number = genRandom();
  image.src = `./images/background_image/bg_${img_number}.jpg`;
  image.style.scrollBehavior;
  if (current_width > current_height) {
    image.style.width = "100%";
  } else {
    image.style.height = "100%";
  }
  // image.style.width = "100%";

  body.prepend(image);
}
init();
