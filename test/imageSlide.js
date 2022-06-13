const images = document.querySelector(".images");

let current = 0;
let start_x = 0;
let current_x = 0;
let end_x = 0;
let positoin = 0;

const IMAGES_WIDTH = images.querySelector("img").width;
const IMAGES_LENGTH = images.children.length - 1;

function prev() {
  if (current > 0) {
    position -= IMAGES_WIDTH;
    images.style.transform = `translateX(${IMAGES_WIDTH * current})`;
    current -= 1;
  }
}

function next() {
  if (current < IMAGES_LENGTH) {
    position += IMAGES_WIDTH;
    images.style.transform = `translateX(${IMAGES_WIDTH * current})`;
    current += 1;
  }
}

function touchStart(event) {
  start_x = event.touches[0].pageX;
  console.log(event.touches[0].pageX);
}

function touchMove(event) {
  current_x = event.touches[0].pageX;

  images.style.transform = `translateX(${current_x - start_x}px)`;
}

function touchEnd(event) {
  end_x = event.changedTouches[0].pageX;
  console.log(event.changedTouches[0].pageX);

  if (current <= IMAGES_LENGTH && end_x - start_x > IMAGES_WIDTH / 2) {
    next();
  } else if (current > 1 && start_x - end_x > IMAGES_WIDTH / 2) {
    prev();
  }
}

images.addEventListener("touchstart", touchStart);
images.addEventListener("touchmove", touchMove);
images.addEventListener("touchend", touchEnd);
